import React, { useState } from 'react';
import { View, Image, StyleSheet, useWindowDimensions, ScrollView, Alert } from 'react-native';
import CustomInput from '../../components/customInput';
import CustomButton from '../../components/customButton';
import SocialSignInButtons from '../../components/socialSignInButtons';
import { useForm } from 'react-hook-form';
import { router } from 'expo-router';
import { H1, Theme, YStack } from 'tamagui';
import { useSignInEmailPassword, useSignUpEmailPassword } from '@nhost/react';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignInScreen = () => {
  //   const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const { control, handleSubmit } = useForm();
  const { isLoading, signInEmailPassword } = useSignInEmailPassword();

  const onSignInPressed = async (data: any) => {
    if (isLoading) {
      return;
    }
    const { email, password } = data;
    const { error, needsEmailVerification, isSuccess } = await signInEmailPassword(email, password);
    // console.log([
    //   'isSuccess0 ' + isSuccess + ' error ' + error?.message + ' email ' + needsEmailVerification,
    // ]);
    if (error) {
      Alert.alert('ohhh', error.message);
    }
    if (needsEmailVerification) {
      Alert.alert('verify your email in the followed link');
    }
    if (isSuccess) {
      router.push('/auth/SignInScreen/SignInScreen');
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
    <YStack backgroundColor="white" minHeight="100%">
      <Image source={require('../../assets/phangan.jpeg')} style={styles.logo} resizeMode="cover" />
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
          text={isLoading ? 'Loading...' : 'Sign In'}
          onPress={handleSubmit(onSignInPressed)}
        />

        <CustomButton text="Forgot password?" onPress={onForgotPasswordPressed} type="TERTIARY" />

        <SocialSignInButtons />
        <CustomButton text="Have an account? Create one" onPress={onSignUpPress} type="TERTIARY" />
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
