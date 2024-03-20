import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { BooksModule } from '@alpin11-coding-challenge/api/feature-book';

import { APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

const validationProviders = {
  provide: APP_PIPE,
  useValue: new ValidationPipe(),
};
@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      graphiql: true,
      autoSchemaFile: true,
    }),
    BooksModule,
  ],
  providers: [validationProviders],
})
export class AppModule {}
