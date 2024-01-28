import { YStack, H2, H1, Separator, Theme } from 'tamagui';

const Page = () => {
  return (
    <Theme name="light">
      <YStack flex={1} alignItems="center" justifyContent="center">
        <H2>Home</H2>
        <H1>lol</H1>
        <Separator />
      </YStack>
    </Theme>
  );
};

export default Page;
