import { YStack, XStack, Text, Theme, Button } from 'tamagui';
// import { SearchInput } from '@tamagui/search-input';
import { Image } from 'react-native';

const Page = () => {
  return (
    <YStack flex={1} space="$4" padding="$4" backgroundColor="$backgroundStrong">
      <YStack space="$2">
        <XStack justifyContent="space-between" alignItems="center">
          <Text fontWeight="bold" fontSize="$6">
            Welcome,
          </Text>
          <Button borderRadius="$2" padding="$2" backgroundColor="$color">
            <Text color="$colorContrast">Game Play</Text>
          </Button>
        </XStack>
        {/* <SearchInput placeholder="Search" /> */}
      </YStack>
      <YStack space="$2">
        <Text fontSize="$4" fontWeight="bold" color="$color">
          Hot this week
        </Text>
        <YStack space="$1" flexDirection="row">
          <Image source={{ uri: 'your_image_url' }} style={{ flex: 1, aspectRatio: 1 }} />
          <Image source={{ uri: 'your_image_url' }} style={{ flex: 1, aspectRatio: 1 }} />
        </YStack>
      </YStack>
      <YStack space="$2">
        <Text fontSize="$4" fontWeight="bold" color="$color">
          Categories
        </Text>
        <XStack space="$2" justifyContent="space-between">
          <Button>Yoga</Button>
          <Button>Kirtan</Button>
          <Button>Music</Button>
          <Button>Art</Button>
        </XStack>
      </YStack>
      <YStack space="$2">
        <Text fontSize="$4" fontWeight="bold" color="$color">
          Latest Business
        </Text>
        <YStack space="$1" flexDirection="row">
          <XStack padding="$2" space="$2" backgroundColor="$background" borderRadius="$3" flex={1}>
            <Image source={{ uri: 'your_image_url' }} style={{ width: 50, height: 50 }} />
            <Text>Harry Will</Text>
            <Text color="$color">Floor Cleaning</Text>
          </XStack>
          <XStack padding="$2" space="$2" backgroundColor="$background" borderRadius="$3" flex={1}>
            <Image source={{ uri: 'your_image_url' }} style={{ width: 50, height: 50 }} />
            <Text>Jenny Wilson</Text>
            <Text color="$color">Bathroom Cleaning</Text>
          </XStack>
        </YStack>
      </YStack>
    </YStack>
  );
};
export default Page;

const CleaningIcon = () => {
  /* Icon component */
};
const RepairingIcon = () => {
  /* Icon component */
};
const PaintingIcon = () => {
  /* Icon component */
};
const ShiftingIcon = () => {
  /* Icon component */
};

{
}
