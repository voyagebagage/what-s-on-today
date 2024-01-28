import React, { useState } from 'react';
import { View, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import CustomInput from '../components/customInput';
import CustomButton from '../components/customButton';
import SocialSignInButtons from '../components/socialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { router } from 'expo-router';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignInScreen = () => {
  const navigation = useNavigation();
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
    router.push({ pathname: '/SignUp' });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.root}>
      <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="cover" />
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

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
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
