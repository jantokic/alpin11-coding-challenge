import BooksList from '../../components/books-list';
import { Input } from '../../../../libs/shared/src/components/ui/input';

import { gql } from '../../data-access/graphql-client';
import { revalidatePath } from 'next/cache';

const Page = async () => {
  const { books } = await gql.GetBooks();

  // Experimenting with server-side mutations using form actions

  const addBook = async (formData: FormData) => {
    "use server"
    const isbn = formData.get('isbn') as string;
    const author = formData.get('author') as string;
    const title = formData.get('title') as string;

    await gql.CreateBook({
      data: {
        isbn,
        author,
        title,
      },
    });

    revalidatePath("/books2")
  };

  return (
    <main className=" min-h-screen w-full flex flex-col gap-12 items-center justify-center">
      <form action={addBook} className="flex flex-col gap-2">
        <label>ISBN</label>
        <Input type="text" name="isbn" />
        <label>Author</label>
        <Input type="text" name="author" />
        <label>Title</label>
        <Input type="text" name="title" />
        <button type="submit">Submit</button>
      </form>
      <BooksList books={books} />
    </main>
  );
};

export default Page;
