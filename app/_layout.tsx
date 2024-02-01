import { useFonts } from 'expo-font';
import { Slot, SplashScreen } from 'expo-router';
import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TamaguiProvider, Theme, View } from 'tamagui';

import config from '../tamagui.config';
import { NhostClient, NhostProvider } from '@nhost/react';
import * as SecureStore from 'expo-secure-store';
SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(drawer)',
};

export default function RootLayout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });
  const nhost = new NhostClient({
    subdomain: 'yzsauenihltxnfkreksl',
    region: 'ap-southeast-1',
    clientStorageType: 'expo-secure-storage',
    clientStorage: SecureStore,
  });
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;
  return (
    <NhostProvider nhost={nhost}>
      <TamaguiProvider config={config}>
        <Theme name="dark">
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Slot />
          </GestureHandlerRootView>
        </Theme>
      </TamaguiProvider>
    </NhostProvider>
  );
}
