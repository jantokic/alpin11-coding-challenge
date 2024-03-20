import { gql } from '../data-access/graphql-client';

export default async function Page() {
  const { books } = await gql.GetBooks();
  return (
    <div>
      <h1>List of Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>ISBN: {book.isbn}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
