// import { nhost } from '../../_layout';
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
    const response = await fetch('https://todo.today/wp-json/wp/v2/pages/');
    console.log(response?.status);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const contentType = response.headers.get('content-type');
    console.log(contentType);
    if (!contentType || !contentType.includes('application/json')) {
      throw new TypeError("Oops, we haven't got JSON!");
    }

    // const data1 = await response.text();
    const data2 = await response.text();
    // const json = awaitfd
    console.log('res' + data2);
    // Simplified example to extract JSON from a known structure
    const jsonMatch = data2.match(/var jsonContent = (\{.*\});/);
    if (jsonMatch && jsonMatch.length > 1) {
      const jsonString = jsonMatch[1];
      const jsonData = JSON.parse(jsonString);
      console.log(jsonData);
    }
    // console.log('res' + JSON.stringify(data2, null, 2));
    // console.log();
    // Check if 'data' is not null and has 'users' property

    // if (data && 'users' in data) {
    // }
    // Return an empty array as a fallback
    return [];
  } catch (error) {
    console.error('error in the fetchUser query : ' + error);
    // Consider how you want to handle errors - throwing an error or returning an empty array
    throw new Error('Failed to fetch users');
  }
}
