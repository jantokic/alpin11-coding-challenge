import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksResolver } from './books.resolver';
import { PrismaModule } from '@alpin11-coding-challenge/api/data-access-db';

@Module({
  providers: [BooksResolver, BooksService],
  imports: [PrismaModule],
})
export class BooksModule {}
