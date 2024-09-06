import { Body, Catch, Controller, Get, Post } from "@nestjs/common";
import { AuthorServic } from "./author.service";

@Controller('author')
export class AuthorController{
  constructor(
    private authorService:AuthorServic
  ){}

  @Post()
  async addAuthor(@Body() body){
    try{
      return   this.authorService.create(body)

    }catch(error){
      throw new Error(error)
    }
  }

  
  @Get()
  async getAuthor(){
    try{
      return   this.authorService.getAll()

    }catch(error){
      throw new Error(error)
    }
  }
}