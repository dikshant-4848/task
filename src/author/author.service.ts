import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Author } from "./author.entity";
import { Repository } from "typeorm";


@Injectable()
export class AuthorServic{
  constructor(
    @InjectRepository(Author)
    private authorRepo: Repository<Author>
  ){}

  async create(author){
    return this.authorRepo.save(author)
  }
  async getAll(){
    return this.authorRepo.find()
  }
}


