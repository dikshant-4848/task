import { Body, Controller,Post,Param,Get,Delete,Patch, Put } from "@nestjs/common";
import { BooksService } from "./books.service";



@Controller('book')
export class booksController  {
  constructor(private bookService:BooksService){}
   // Add a new book
   @Post()
   async addBook(@Body() body: any) {
     try {
       const res = await this.bookService.addBooks(body);
       return res;
     } catch (error) {
       throw new Error(error.message);
     }
   }
 
   // Get all books
   @Get()
   async getAllBooks() {
     try {
       return await this.bookService.getAllBooks();
     } catch (error) {
       throw new Error(error.message);
     }
   }
 
   // Get a specific book by id
   @Get(':id')
   async getBookById(@Param('id') id: number) {
     try {
       return await this.bookService.getBookById(id);
     } catch (error) {
       throw new Error(error.message);
     }
   }
 
   // Update a specific book by id
   @Put(':id')
   async updateBook(@Param('id') id: number, @Body() updatedBook: any) {
     try {
       return await this.bookService.updateBook(id, updatedBook);
     } catch (error) {
       throw new Error(error.message);
     }
   }
 
   // Delete a specific book by id
   @Delete(':id')
   async deleteBook(@Param('id') id: number) {
     try {
       return await this.bookService.deleteBook(id);
     } catch (error) {
       throw new Error(error.message);
     }
   }
}
