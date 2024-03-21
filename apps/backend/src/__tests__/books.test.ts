import { gql } from '../../../frontend/data-access/graphql-client';

// Generate a random ISBN number with 10-13 digits
const randomIsbn = Math.floor(10 ** 9 + Math.random() * 9 * 10 ** 9).toString(); // Generates a 10-digit ISBN

describe('createBook', () => {
  it('should create a new book if the ISBN is unique', async () => {
    // Mock data for form values with the random ISBN
    const values = {
      isbn: randomIsbn,
      author: 'Test Author',
      title: 'Test Title',
    };

    // Mock the createBook function
    const createBook = jest.fn().mockResolvedValue({
      isbn: values.isbn,
      author: values.author,
      title: values.title,
    });

    // Invoke the onSubmit function with mock values and mocked createBook function
    const result = await gql.CreateBook({ data: values });

    // Verify that the createBook function was called with the correct values
    expect(createBook).toHaveBeenCalledWith(values);

    // Verify that the result is as expected (the created book object)
    expect(result).toEqual({
      isbn: values.isbn,
      author: values.author,
      title: values.title,
    });
  });

  it('should set an error if the ISBN already exists', async () => {
    // Mock data for form values
    const values = {
      isbn: randomIsbn, // Duplicate ISBN
      author: 'Test Author',
      title: 'Test Title',
    };

    // Mock the createBook function to throw an error for duplicate ISBN
    const createBook = jest
      .fn()
      .mockRejectedValue(new Error('ISBN already exists'));

    // Invoke the onSubmit function with mock values and mocked createBook function
    const result = await gql.CreateBook({ data: values });

    // Verify that the createBook function was called with the correct values
    expect(createBook).toHaveBeenCalledWith(values);

    // Verify that the result is an error message
    expect(result).toBe('Error creating Book!');
  });
});
