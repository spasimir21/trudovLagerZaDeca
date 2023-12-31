import { Injectable, CanActivate, ExecutionContext, Inject } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Config, CONFIG } from '@lager/config';
import * as jsonwebtoken from 'jsonwebtoken';

function verifyToken(context: ExecutionContext, secret: string, ignoreExpiration: boolean): boolean {
  const ctx = GqlExecutionContext.create(context);
  const _context = ctx.getContext();

  const authorization: string = _context.req.header('Authorization');
  if (authorization == null) return false;

  const token: string = authorization.split(' ')[1];
  if (token == null) return false;

  try {
    const data = jsonwebtoken.verify(token, secret, { ignoreExpiration });
    _context.token = { raw: token, data };
  } catch (error) {
    return false;
  }

  return true;
}

@Injectable()
class GQLTokenGuard implements CanActivate {
  constructor(@Inject(CONFIG) private readonly config: Config) {}

  canActivate(context: ExecutionContext): boolean {
    return verifyToken(context, this.config.token.secret, false);
  }
}

@Injectable()
class GQLIgnoreExpiredTokenGuard implements CanActivate {
  constructor(@Inject(CONFIG) private readonly config: Config) {}

  canActivate(context: ExecutionContext): boolean {
    return verifyToken(context, this.config.token.secret, true);
  }
}

export { GQLTokenGuard, GQLIgnoreExpiredTokenGuard };
