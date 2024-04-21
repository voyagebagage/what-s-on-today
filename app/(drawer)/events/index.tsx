import { Ionicons } from '@expo/vector-icons';
import UserScreen from 'app/screens/usersScreen';
import { Link, Stack, router } from 'expo-router';
import { Pressable } from 'react-native';
import { YStack, H2, Separator, Theme, Button, Text } from 'tamagui';

const Page = () => {
  return (
    <YStack flex={1} alignItems="center" justifyContent="center">
      <Stack.Screen
        options={{
          title: 'Event',
          headerLeft: () => (
            <Button
              onPress={router.back}
              icon={<Ionicons name="arrow-back" size={20} backgroundColor={'transparent'} />}
              color="#00cc00"
              backgroundColor={'white'}
              pressStyle={{
                backgroundColor: 'white', // Change to your preferred color
                borderWidth: 0,
              }}>
              Back
            </Button>
          ),
        }}
      />
      <H2>Events</H2>
      <Separator />
      <Link href={'/screens/usersScreen'} asChild>
        <Pressable>
          <Text>List of Participants</Text>
        </Pressable>
      </Link>
    </YStack>
  );
};

export default Page;
