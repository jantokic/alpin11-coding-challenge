import Link from 'next/link';
import { Book } from '../types/books';
import { Button } from '@alpin11-coding-challenge/libs/shared';

const BooksList = ({
  books,
  currentPage,
  totalPages,
  totalBooks,
}: {
  books: Book[];
  currentPage: number;
  totalPages: number;
  totalBooks: number;
}) => {
  return (
    <section className=" flex flex-col gap-4">
      <h1 className="text-xl font-bold">Books List ({totalBooks})</h1>

      <ul className="grid grid-cols-4 gap-4">
        {books?.map((book) => (
          <li key={book.isbn} className="border p-4">
            <h2 className="text-xl font-bold center">{book.title}</h2>
            <p className="text-md">Author: {book.author}</p>
            <p className="text-sm">ISBN: {book.isbn}</p>
          </li>
        ))}
      </ul>
      <span>Page: {currentPage} / {totalPages}</span>
      <div className="flex gap-2">
        <Link href={`/books?page=${currentPage - 1}`}>
          <Button className="w-24">Previous</Button>
        </Link>
        <Link href={`/books?page=${currentPage + 1}`}>
          <Button className="w-24">Next</Button>
        </Link>
      </div>
    </section>
  );
};

export default BooksList;
