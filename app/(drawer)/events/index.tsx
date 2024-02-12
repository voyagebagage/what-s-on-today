import UserScreen from 'app/screens/usersScreen';
import { Link, router } from 'expo-router';
import { Pressable } from 'react-native';
import { YStack, H2, Separator, Theme, Button, Text } from 'tamagui';

const Page = () => {
  return (
    <YStack flex={1} alignItems="center" justifyContent="center">
      <H2>Events</H2>
      <Separator />
      <Link href={'/screens/usersScreen'}>
        <Pressable>
          <Text>List of Participants</Text>
        </Pressable>
      </Link>
    </YStack>
  );
};

export default Page;
