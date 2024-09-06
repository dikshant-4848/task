import { Module } from "@nestjs/common";
import { booksController } from "./books.controller";
import { BooksService } from "./books.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Books } from "./entity/books.entity";


@Module({
  controllers: [booksController],
  providers: [BooksService],
  imports:[TypeOrmModule.forFeature([Books])]
})
export class BooksModule {
  
}