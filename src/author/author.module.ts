import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Author } from "./author.entity";
import { AuthorController } from "./author.controller";
import { AuthorServic } from "./author.service";



@Module({
  controllers:[AuthorController],
  providers:[AuthorServic],
  imports:[TypeOrmModule.forFeature([Author])]
})

export class AuthorModule{}