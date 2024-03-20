import { registerEnumType } from '@nestjs/graphql';

export enum BookScalarFieldEnum {
    id = "id",
    title = "title",
    author = "author",
    isbn = "isbn",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(BookScalarFieldEnum, { name: 'BookScalarFieldEnum', description: undefined })
