import { z } from 'zod';


export const formSchema = z.object({
    isbn: z.string().min(10, { message: 'ISBN must be at least 10 characters' }).max(13, { message: 'ISBN cannot exceed 13 characters' }),
    author: z.string().min(1, { message: 'Author is required' }).max(50, { message: 'Author name cannot exceed 50 characters' }),
    title: z.string().min(1, { message: 'Title is required' }).max(50, { message: 'Title cannot exceed 50 characters' }),
  });