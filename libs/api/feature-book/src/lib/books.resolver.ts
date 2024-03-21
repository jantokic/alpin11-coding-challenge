import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BooksService } from './books.service';
import {
  Book,
  CreateOneBookArgs,
  FindUniqueBookArgs,
} from '@alpin11-coding-challenge/libs/api/generated-db-types';

@Resolver(() => Book)
export class BooksResolver {
  constructor(private readonly booksService: BooksService) {}

  @Mutation(() => Book)
  async createBook(
    @Args() createOneBookArgs: CreateOneBookArgs
  ): Promise<Book> {
    // Check if the ISBN already exists
    const existingBook = await this.booksService.findOne({
      where: { isbn: createOneBookArgs.data.isbn },
    });
    if (existingBook) {
      throw new Error('Error creating Book!');
    }

    // If ISBN is unique, create the book
    // Create the new book
    const createdBook = await this.booksService.create(createOneBookArgs);

    // Return the created book
    return createdBook;
  }

  @Query(() => [Book])
  books(): Promise<Book[]> {
    return this.booksService.findAll();
  }

  @Query(() => Book)
  book(@Args() findUniqueBookArgs: FindUniqueBookArgs) {
    return this.booksService.findOne(findUniqueBookArgs);
  }
}
