import UserScreen from 'app/screens/usersScreen';
import { Link, router } from 'expo-router';
import { YStack, H2, Separator, Theme, Button } from 'tamagui';

const Page = () => {
  return (
    <Theme name="light">
      <YStack flex={1} alignItems="center" justifyContent="center">
        <H2>Events</H2>
        <Separator />
        <Button>
          <Link href={'/screens/usersScreen'}>List of Participants</Link>
        </Button>
      </YStack>
    </Theme>
  );
};

export default Page;
