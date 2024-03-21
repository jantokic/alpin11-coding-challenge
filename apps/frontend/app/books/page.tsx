import { redirect } from 'next/navigation';
import BookForm from '../../components/book-form';
import BooksList from '../../components/books-list';

import { gql } from '../../data-access/graphql-client';


 const Page = async ({ searchParams }: { searchParams: { [key: string]: string | undefined } }) => {
  const { books } = await gql.GetBooks();
  


  const page = parseInt(searchParams.page || '1', 10);

  if (page < 1) {
    redirect('/books?page=1');
  }

  console.log('page', page);

  const booksPerPage = 3;
  const totalBooks = books.length;
  const totalPages = Math.ceil(totalBooks / booksPerPage);

  if (page > totalPages) {
    redirect(`/books?page=${totalPages}`);
  }

  const startIndex = (page - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const paginatedBooks = books.slice(startIndex, endIndex);

  return (
    <main className=" min-h-screen w-full flex p-12 gap-12 items-center justify-center">
      <BookForm books={books} />
      <BooksList books={paginatedBooks} currentPage={page} totalPages={totalPages} totalBooks={totalBooks} />
    </main>
  );
};

export default Page;