"use server"

import { revalidatePath } from 'next/cache';
import { gql } from '../data-access/graphql-client';
import { formSchema } from '../schema/book';
import { z } from 'zod';


export const createBook = async (values: z.infer<typeof formSchema>) => {
    
    await gql.CreateBook({
      data: {
        ...values,
      },
    });


    revalidatePath("/books")
}