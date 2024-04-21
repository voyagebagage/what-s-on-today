import { Link, Stack } from 'expo-router';
import { YStack, Heading, Main, H3 } from 'tamagui';

// import {  } from '.tamagui/tamagui.config.json';

export default function NotFoundScreen() {
  return (
    <YStack>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <Main>
        <YStack>
          <Heading>This screen doesn't exist.</Heading>
          <Link href="/">
            <H3>Go to home screen!</H3>
          </Link>
        </YStack>
      </Main>
    </YStack>
  );
}
