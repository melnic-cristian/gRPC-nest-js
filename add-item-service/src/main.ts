import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'additemsservice',
      protoPath: join(__dirname, '.././src/modules/item/_proto/item.proto'),
      url: '0.0.0.0:5000', 
    },
  });

  await app.listen();
}
bootstrap();

