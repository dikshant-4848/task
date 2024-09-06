import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Books } from "./entity/books.entity";
import { Repository } from "typeorm";
import { error } from "console";

@Injectable()
export class BooksService {
  constructor (

    @InjectRepository(Books) private bookRepository:Repository<Books>,
  ) {}
// Add a new book
async addBooks(book: any): Promise<Books> {
  try {
    const isExist = await this.bookRepository.findOne({
      where: { name: book?.name },
    });
    if (isExist) {
      throw new Error("Book already exists.");
    }
    const res = await this.bookRepository.save(book);
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Get all books
async getAllBooks(): Promise<Books[]> {
  try {
    return await this.bookRepository.find();
  } catch (error) {
    throw new Error(error.message);
  }
}

// Get a specific book by id
async getBookById(id: number): Promise<Books> {
  try {
    const book = await this.bookRepository.findOne({
      where: { id },
    });
    if (!book) {
      throw new Error("Book not found.");
    }
    return book;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Update book details
async updateBook(id: number, updatedBook: any): Promise<Books> {
  try {
    const book = await this.getBookById(id);
    if (!book) {
      throw new Error("Book not found.");
    }
    const updated = Object.assign(book, updatedBook);
    return await this.bookRepository.save(updated);
  } catch (error) {
    throw new Error(error.message);
  }
}

// Delete a book by id
async deleteBook(id: number): Promise<string> {
  try {
    const book = await this.getBookById(id);
    if (!book) {
      throw new Error("Book not found.");
    }
    await this.bookRepository.delete(id);
    return `Book with id ${id} deleted successfully.`;
  } catch (error) {
    throw new Error(error.message);
  }
}


}