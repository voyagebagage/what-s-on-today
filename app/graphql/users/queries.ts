import { nhost } from 'app/_layout';
import { gql } from 'graphql-request';
import { UsersData } from 'app/types';
import { User } from '@nhost/react';

const GET_USERS_QUERY = gql`
  query GetUsers {
    users {
      id
      avatarUrl
      displayName
    }
  }
`;

// Ensure that fetchUsers is correctly typed and handles potential null values
export async function fetchUsers(): Promise<User[]> {
  try {
    const { data, error } = await nhost.graphql.request<User[]>(GET_USERS_QUERY);

    // Check if 'data' is not null and has 'users' property

    if (data && 'users' in data) {
      return Object.values(data).flat(); // to format for the flatlist from users:[] to []
    }
    // Return an empty array as a fallback
    return [];
  } catch (error) {
    console.error(error);
    // Consider how you want to handle errors - throwing an error or returning an empty array
    throw new Error('Failed to fetch users');
  }
}
