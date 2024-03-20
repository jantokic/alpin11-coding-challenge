import * as Types from './types';

import { GraphQLClient, RequestOptions } from 'graphql-request';
import { gql } from 'graphql-request';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export type GetBooksVariables = Types.Exact<{ [key: string]: never; }>;


export type GetBooks = { __typename?: 'Query', books: Array<{ __typename?: 'Book', id: string, author: string, title: string, isbn: string }> };


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

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetBooks(variables?: GetBooksVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetBooks> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetBooks>(GetBooksDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetBooks', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;