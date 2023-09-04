import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  // app.enableCors({ origin: 'http://lager.com' });
  app.enableCors({ origin: ['http://lager.com', 'http://lager.com:3000'] });
  await app.listen(3000);
}

bootstrap();
