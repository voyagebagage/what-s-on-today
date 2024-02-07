import { useFonts } from 'expo-font';
import { Slot, SplashScreen } from 'expo-router';
import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TamaguiProvider, Theme, View } from 'tamagui';

import config from '../tamagui.config';
import { NhostClient, NhostProvider } from '@nhost/react';
import * as SecureStore from 'expo-secure-store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(drawer)',
};

export const nhost = new NhostClient({
  subdomain: 'yzsauenihltxnfkreksl',
  region: 'ap-southeast-1',
  clientStorageType: 'expo-secure-storage',
  clientStorage: SecureStore,
});
export default function RootLayout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;
  return (
    <TamaguiProvider config={config}>
      <Theme name="dark">
        <GestureHandlerRootView style={{ flex: 1 }}>
          <QueryClientProvider client={queryClient}>
            <NhostProvider nhost={nhost}>
              <Slot />
            </NhostProvider>
          </QueryClientProvider>
        </GestureHandlerRootView>
      </Theme>
    </TamaguiProvider>
  );
}
