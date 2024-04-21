import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../auth/SignInScreen/SignInScreen';
import SignUpScreen from '../auth/SignUpScreen';

import { Spinner, YStack } from 'tamagui';
import { DrawerToggleButton } from '@react-navigation/drawer';

import * as Facebook from 'expo-auth-session/providers/facebook';
import * as WebBrowser from 'expo-web-browser';
import { useEffect, useState } from 'react';
import { useAuth } from '../hooks/auth';

WebBrowser.maybeCompleteAuthSession();

const DrawerLayout = () => {
  const Stack = createNativeStackNavigator();
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <YStack
        flex={1}
        alignItems="center" // Centers horizontally in a column
        justifyContent="center">
        <Spinner size="large" />
      </YStack>
    );
  }
  // if (!user) {
  //   return (
  //     <Stack.Navigator>
  //       <Stack.Screen name="sign-in" component={SignInScreen} options={{ headerShown: false }} />
  //       {/* <Stack.Screen name="sign-up" component={SignUpScreen} options={{ title: 'Sign up' }} /> */}
  //     </Stack.Navigator>
  //   );
  // }
  return (
    <Drawer
      screenOptions={{
        //to change the possition and the burger menu
        drawerPosition: 'right',
        headerRight: () => <DrawerToggleButton />,
        headerLeft: () => null,
      }}>
      <Drawer.Screen
        name="index"
        options={{
          headerTitle: 'Home',
          drawerLabel: 'Home',
          drawerIcon: ({ size, color }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="news"
        options={{
          headerTitle: 'Newsfeed',
          drawerLabel: 'News',
          drawerIcon: ({ size, color }) => (
            <Ionicons name="newspaper-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="events"
        options={{
          headerShown: false,
          drawerLabel: 'Events',
          drawerIcon: ({ size, color }) => (
            <Ionicons name="add-circle-sharp" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="profile/index"
        options={{
          headerTitle: 'Profile',
          drawerLabel: 'Profile',
          drawerIcon: ({ size, color }) => (
            <Ionicons name="newspaper-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
