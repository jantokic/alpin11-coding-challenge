import { gql } from 'graphql-request';

const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      author
      title
      isbn
    }
  }
`;
