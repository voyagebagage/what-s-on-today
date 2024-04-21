import { useFonts } from 'expo-font';
import { Slot, SplashScreen } from 'expo-router';
import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TamaguiProvider, Theme, View } from 'tamagui';

import config from '../tamagui.config';
// import { NhostClient, NhostProvider } from '@nhost/react';
import * as SecureStore from 'expo-secure-store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './hooks/auth';

// Create a client
const queryClient = new QueryClient();

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(drawer)',
};
// give me an array of all the days of the week

// const nhostClient = new NhostClient({
//   baseURL: 'https://backend-1b9b3c7b.nhost.app',
// });

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
        {/* <NhostProvider client={nhostClient}> */}
        <GestureHandlerRootView style={{ flex: 1 }}>
          <QueryClientProvider client={queryClient}>
            <AuthProvider>
              <Slot />
            </AuthProvider>
          </QueryClientProvider>
        </GestureHandlerRootView>
        {/* </NhostProvider> */}
      </Theme>
    </TamaguiProvider>
  );
}
