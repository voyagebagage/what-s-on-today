import UserScreen from 'app/screens/usersScreen';
import { Link, router } from 'expo-router';
import { Pressable } from 'react-native';
import { YStack, H2, Separator, Theme, Button } from 'tamagui';

const Page = () => {
  return (
    <Theme name="light">
      <YStack flex={1} alignItems="center" justifyContent="center">
        <H2>Events</H2>
        <Separator />
        <Link href={'/screens/usersScreen'}>
          <Pressable>List of Participants</Pressable>
        </Link>
      </YStack>
    </Theme>
  );
};

export default Page;
