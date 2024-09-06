import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { AuthorModule } from './author/author.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Rajput@54321',
      database: 'ktsession',
      entities: ['dist/**/*.entity.js'],
      synchronize: true,
    }),

    TasksModule,
  BooksModule,
AuthorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
