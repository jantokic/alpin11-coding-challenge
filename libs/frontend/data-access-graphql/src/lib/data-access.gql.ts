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


const CREATE_BOOK = gql`
  mutation CreateBook($data: BookCreateInput!) {
    createBook(data: $data) {
      id
      author
      title
      isbn
    }
  }
`;
