import { Injectable } from '@nestjs/common';
import { PrismaService } from '@alpin11-coding-challenge/api/data-access-db';
import { CreateOneBookArgs, FindUniqueBookArgs, UpdateOneBookArgs, DeleteOneBookArgs } from '@alpin11-coding-challenge/api/generated-db-types';

@Injectable()
export class BooksService {
  constructor(private readonly prisma: PrismaService) {}

  create(createOneBookArgs: CreateOneBookArgs) {
    return this.prisma.book.create(createOneBookArgs);
  }

  findAll() {
    return this.prisma.book.findMany();
  }

  findOne(findUniqueBookArgs: FindUniqueBookArgs) {
    return this.prisma.book.findUnique(findUniqueBookArgs);
  }

  update(updateOneBookArgs: UpdateOneBookArgs) {
    return this.prisma.book.update(updateOneBookArgs);
  }

  remove(deleteOneBookArgs: DeleteOneBookArgs) {
    return this.prisma.book.delete(deleteOneBookArgs);
  }
}
