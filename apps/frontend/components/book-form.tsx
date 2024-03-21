/* eslint-disable @nx/enforce-module-boundaries */
'use client';
import { Button } from '../../../libs/shared/src/components/ui/button';
import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../../libs/shared/src/components/ui/form';
import { Input } from '../../../libs/shared/src/components/ui/input';
import { toast } from 'sonner';
import { createBook } from '../actions/books';
import { formSchema } from '../schema/book';
import { Book } from '../types/books';

export default function BookForm({ books }: { books: Book[] }) {
  /**
   * Initialize the form with default values and schema validation.
   */
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      isbn: '',
      author: '',
      title: '',
    },
  });

  /**
   * Handles the form submission.
   * Validates the ISBN against existing books and creates a new book if valid.
   *
   * @param {z.infer<typeof formSchema>} values - The form values to submit.
   */
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Check if the submitted ISBN already exists in the books array.
    const isbnExists = books.some((book) => book.isbn === values.isbn);

    // If the ISBN exists, set an error on the form and prevent further action.
    if (isbnExists) {
      form.setError('isbn', { message: 'This ISBN already exists' });
      return;
    }

    // If the ISBN is unique, proceed to create the book.
    const createBookPromise = createBook(values);
    // Display toast notifications based on the promise status.
    toast.promise(createBookPromise, {
      loading: 'Creating book...',
      success: () => {
        form.reset();

        return 'Book created!';
      },
      error: 'Error creating book',
    });

    // Return the promise to the form to handle the loading state.
    return createBookPromise;
  }

  return (
    <div className="">
      <h1 className="text-xl font-bold mb-6">Book Form</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="isbn"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ISBN</FormLabel>
                <FormControl>
                  <Input placeholder="9785432547153" {...field} />
                </FormControl>
                <FormDescription>Input your books ISBN</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Author</FormLabel>
                <FormControl>
                  <Input placeholder="Jan Tokic" {...field} />
                </FormControl>
                <FormDescription>Input the books author</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Getting into Alpin11" {...field} />
                </FormControl>
                <FormDescription>Input the books title</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={form.formState.isSubmitting} type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
