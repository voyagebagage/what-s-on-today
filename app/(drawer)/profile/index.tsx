import { useAuth } from '../../hooks/auth';
import CustomButton from '../../components/customButton';
import { YStack, Separator, Theme, Image, Text } from 'tamagui';

const Page = () => {
  const { user, signOut } = useAuth();
  console.log(JSON.stringify(user, null, 2));

  return (
    <Theme name="light">
      <YStack flex={1} alignItems="center" padding={10}>
        <Image
          source={{ uri: user?.picture.data.url }}
          width={100}
          borderRadius={50}
          aspectRatio={1}
        />
        <Text fontSize={22} marginVertical={15} fontWeight="bold" color="dimgray">
          {user?.name}
        </Text>
        <Separator />
        <CustomButton onPress={signOut} text="Sign out" type="TERTIARY" fgColor="crimson" />
      </YStack>
    </Theme>
  );
};

export default Page;
