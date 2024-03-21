import * as Types from './types';

import { GraphQLClient, RequestOptions } from 'graphql-request';
import { gql } from 'graphql-request';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export type GetBooksVariables = Types.Exact<{ [key: string]: never; }>;


export type GetBooks = { __typename?: 'Query', books: Array<{ __typename?: 'Book', id: string, author: string, title: string, isbn: string }> };

export type CreateBookVariables = Types.Exact<{
  data: Types.BookCreateInput;
}>;


export type CreateBook = { __typename?: 'Mutation', createBook: { __typename?: 'Book', id: string, author: string, title: string, isbn: string } };


export const GetBooksDocument = /*#__PURE__*/ gql`
    query GetBooks {
  books {
    id
    author
    title
    isbn
  }
}
    `;
export const CreateBookDocument = /*#__PURE__*/ gql`
    mutation CreateBook($data: BookCreateInput!) {
  createBook(data: $data) {
    id
    author
    title
    isbn
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetBooks(variables?: GetBooksVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetBooks> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetBooks>(GetBooksDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetBooks', 'query', variables);
    },
    CreateBook(variables: CreateBookVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateBook> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateBook>(CreateBookDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateBook', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;