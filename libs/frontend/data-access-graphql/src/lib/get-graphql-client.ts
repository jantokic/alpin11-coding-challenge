import { GraphQLClient } from 'graphql-request';
import { getSdk } from './data-access.gql.gen';

export const getGraphQLClient = (
  url: string,
  headers?: Record<string, string>
) => {
  const client = new GraphQLClient(url, {
    headers,
  });
  return getSdk(client);
};
