import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BooksService } from './books.service';
import { Book, CreateOneBookArgs, FindUniqueBookArgs, UpdateOneBookArgs, DeleteOneBookArgs} from "@alpin11-coding-challenge/libs/api/generated-db-types";

@Resolver(() => Book)
export class BooksResolver {
  constructor(private readonly booksService: BooksService) {}

  @Mutation(() => Book)
  createBook(@Args() createOneBookArgs: CreateOneBookArgs) {
    return this.booksService.create(createOneBookArgs);
  }

  @Query(() => [Book])
  books(): Promise<Book[]> {
    return this.booksService.findAll();
  }

  @Query(() => Book)
  book(@Args() findUniqueBookArgs: FindUniqueBookArgs) {
    return this.booksService.findOne(findUniqueBookArgs);
  }

  @Mutation(() => Book)
  updateBook(@Args() updateOneBookArgs: UpdateOneBookArgs) {
    return this.booksService.update(updateOneBookArgs);
  }

  @Mutation(() => Book)
  removeBook(@Args() deleteOneBookArgs: DeleteOneBookArgs) {
    return this.booksService.remove(deleteOneBookArgs);
  }
}
