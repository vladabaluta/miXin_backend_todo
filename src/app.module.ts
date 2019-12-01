import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://Vlad:hulk22.ro@clusteribm-1t6oi.mongodb.net/miXin?retryWrites=true&w=majority'), TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


