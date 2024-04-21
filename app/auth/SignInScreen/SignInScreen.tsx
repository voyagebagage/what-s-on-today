import React from 'react';
import { View, Image, StyleSheet, useWindowDimensions, ScrollView, Alert } from 'react-native';
import CustomButton from '../../components/customButton';
import { H1, Theme, YStack } from 'tamagui';
import { AuthRequestPromptOptions, AuthSessionResult } from 'expo-auth-session';
import { useAuth } from '../../hooks/auth';

const SignInScreen = () => {
  const { signIn } = useAuth();

  return (
    <YStack backgroundColor="white" minHeight="100%">
      <Image source={require('../../assets/phangan.jpeg')} style={styles.logo} resizeMode="cover" />
      <H1 color={'black'} alignSelf="center">
        Phangan Today
      </H1>
      <View style={styles.container}>
        <CustomButton onPress={signIn} bgColor="#3B71F3" fgColor="white" text="Log with FB" />
      </View>
    </YStack>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    minHeight: '100%',
  },
  container: {
    padding: 20,
  },
  logo: {
    width: '100%',
    height: undefined,
    aspectRatio: 16 / 9,
  },
});

export default SignInScreen;
