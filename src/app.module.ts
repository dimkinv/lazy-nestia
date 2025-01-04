import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user.service';
import { ConsumerModule } from './consumer/consumer.module';

@Module({
  imports: [ConsumerModule],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {}
