import { User, Token, MatchUser, MatchToken, CreateUser, CreateToken, DeleteToken } from '@lager/database';
import { DatabaseConnection } from '@lager/neo4ogm';
import { Inject, Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { Token as IToken } from '@lager/utils';
import { CONFIG, Config } from '@lager/config';
import * as jsonwebtoken from 'jsonwebtoken';
import { LoginDto } from './dto/login.dto';
import { randomBytes } from 'crypto';
import * as bcrypt from 'bcrypt';

@Injectable()
class AuthService {
  constructor(@Inject(CONFIG) private readonly config: Config, private readonly database: DatabaseConnection) {}

  async register(dto: RegisterDto): Promise<[string, string] | null> {
    const matchingUsers = await this.database.run(MatchUser, { email: dto.email });
    if (matchingUsers.records.length > 0) return null;

    const user = User.create({
      fullname: dto.fullname,
      email: dto.email,
      phoneNumber: dto.phoneNumber,
      dateOfBirth: dto.dateOfBirth,
      isMale: dto.isMale,
      password: await bcrypt.hash(dto.password, this.config.auth.salt_rounds)
    });

    const refreshToken = randomBytes(this.config.auth.refresh_token_length).toString('hex');
    const token = jsonwebtoken.sign({ ...user, password: undefined, _id: undefined }, this.config.token.secret, {
      expiresIn: this.config.token.token_lifetime
    });

    await this.database.run(CreateUser, { user });
    await this.database.run(CreateToken, {
      token: Token.create({ refreshToken, token }),
      uuid: user.uuid
    });

    return [token, refreshToken];
  }

  async login(dto: LoginDto): Promise<[string, string] | null> {
    const matchingUsers = await this.database.run(MatchUser, { email: dto.email });
    if (matchingUsers.records.length == 0) return null;

    const user = matchingUsers.records[0].user;

    if (!(await bcrypt.compare(dto.password, user.password))) return null;

    const refreshToken = randomBytes(this.config.auth.refresh_token_length).toString('hex');
    const token = jsonwebtoken.sign({ ...user, password: undefined, _id: undefined }, this.config.token.secret, {
      expiresIn: this.config.token.token_lifetime
    });

    await this.database.run(CreateToken, {
      token: Token.create({ refreshToken, token }),
      uuid: user.uuid
    });

    return [token, refreshToken];
  }

  async logout(token: string): Promise<void> {
    await this.database.run(DeleteToken, { token });
  }

  async refresh(token: IToken, refreshToken: string): Promise<[string, string] | null> {
    const matchingTokens = await this.database.run(MatchToken, { token: token.raw, refreshToken });
    if (matchingTokens.records.length == 0) return null;

    await this.database.run(DeleteToken, { token: token.raw });

    const newRefreshToken = randomBytes(this.config.auth.refresh_token_length).toString('hex');
    const newToken = jsonwebtoken.sign({ ...token.data, exp: undefined, iat: undefined }, this.config.token.secret, {
      expiresIn: this.config.token.token_lifetime
    });

    await this.database.run(CreateToken, {
      token: Token.create({ refreshToken: newRefreshToken, token: newToken }),
      uuid: token.data.uuid
    });

    return [newToken, newRefreshToken];
  }
}

export { AuthService };
