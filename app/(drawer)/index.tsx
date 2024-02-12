import { YStack, H2, H1, Separator, Theme } from 'tamagui';

const Page = () => {
  return (
    <Theme name="light">
      <YStack flex={1} alignItems="center" justifyContent="center">
        <H2>Landing page</H2>
        {/* <H1></H1> */}
        <Separator />
      </YStack>
    </Theme>
  );
};

export default Page;
