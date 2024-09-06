import { Books } from "src/books/entity/books.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";




@Entity()
export class Author{
  @PrimaryGeneratedColumn()
  id:number

@Column({nullable: true})
name: string

@OneToMany(()=>Books,(book)=>book.author)
books: Books[]

@CreateDateColumn()
created_at: Date

@UpdateDateColumn()
updated_at: Date




}