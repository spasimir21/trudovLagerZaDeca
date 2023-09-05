import { NestFactory } from '@nestjs/core';
import { WikiModule } from './wiki.module';

async function bootstrap() {
  const app = await NestFactory.create(WikiModule);
  // app.enableCors({ origin: 'http://lager.com' });
  app.enableCors({ origin: ['http://lager.com', 'http://lager.com:3000'] });
  await app.listen(3000);
}

bootstrap();
