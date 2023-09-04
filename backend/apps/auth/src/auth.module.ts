import { AuthController } from './auth.controller';
import { DatabaseProvider } from '@lager/database';
import { relationships } from '@lager/database';
import { ConfigProvider } from '@lager/config';
import { AuthService } from './auth.service';
import { models } from '@lager/database';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [ConfigProvider('./config.yml'), DatabaseProvider(models, relationships), AuthService]
})
class AuthModule {}

export { AuthModule };
