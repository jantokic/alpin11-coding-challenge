import { NextRequest, NextResponse } from 'next/server';
import { gql } from '../../../data-access/graphql-client';

export async function GET(request: NextRequest) {
  try {
    const {books} = await gql.GetBooks();
    console.log('books in api route', books);

    return NextResponse.json( books );
  } catch (e) {
    console.error(e);
  }
}
