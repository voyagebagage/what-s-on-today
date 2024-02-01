import React, { useState } from 'react';
import { View, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import CustomInput from '../components/customInput';
import CustomButton from '../components/customButton';
import SocialSignInButtons from '../components/socialSignInButtons';
import { useForm } from 'react-hook-form';
import { router } from 'expo-router';
import { H1, Theme, YStack } from 'tamagui';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignInScreen = () => {
  //   const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const { control, handleSubmit } = useForm();

  const onSignInPressed = async (data: any) => {
    if (loading) {
      return;
    }

    setLoading(true);

    // Sign in

    setLoading(false);
  };

  const onForgotPasswordPressed = () => {
    // navigation.navigate("ForgotPassword");
  };

  const onSignUpPress = () => {
    router.push({ pathname: '/auth/SignUpScreen' });
  };

  return (
    <Theme name="dark">
      <YStack backgroundColor="white" minHeight="100%">
        <Image source={require('../assets/phangan.jpeg')} style={styles.logo} resizeMode="cover" />
        <H1 color={'black'} alignSelf="center">
          Phangan Today
        </H1>
        <View style={styles.container}>
          <CustomInput
            name="email"
            placeholder="Email"
            control={control}
            rules={{
              required: 'Email is required',
              pattern: { value: EMAIL_REGEX, message: 'Email is invalid' },
            }}
          />

          <CustomInput
            name="password"
            placeholder="Password"
            secureTextEntry
            control={control}
            rules={{
              required: 'Password is required',
              minLength: {
                value: 3,
                message: 'Password should be minimum 3 characters long',
              },
            }}
          />

          <CustomButton
            text={loading ? 'Loading...' : 'Sign In'}
            onPress={handleSubmit(onSignInPressed)}
          />

          <CustomButton text="Forgot password?" onPress={onForgotPasswordPressed} type="TERTIARY" />

          <SocialSignInButtons />
          <CustomButton text="Have an account? Sign in" onPress={onSignUpPress} type="TERTIARY" />
        </View>
      </YStack>
    </Theme>
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
