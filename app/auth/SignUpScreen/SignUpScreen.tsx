import React from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import CustomInput from '../../components/customInput';
import CustomButton from '../../components/customButton';
import SocialSignInButtons from '../../components/socialSignInButtons';
import { useForm } from 'react-hook-form';
import { router } from 'expo-router';
import { Theme, YStack } from 'tamagui';
// import { useSignUpEmailPassword } from '@nhost/react';
// import { nhost } from 'app/_layout';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// type AuthNavigationParamList = {
//   SignIn: undefined; // Add other routes here as needed
//   // ...
// };

const SignUpScreen = () => {
  const { control, handleSubmit, watch } = useForm();
  // const [isSuccess, setIsSuccess] = useState(false);
  const pwd = watch('password');
  //   const navigation = useNavigation();
  // const { signUpEmailPassword, isLoading, isSuccess } = useSignUpEmailPassword();

  const onRegisterPressed = async (data: any) => {
    // if (isLoading) {
    //   return;
    // }
    const { name, email, password } = data;
    // const { needsEmailVerification, error } = await signUpEmailPassword(email, password, {
    //   displayName: name.trim(),
    //   metadata: { name },
    // });
    // console.log({
    //   isSuccess,
    //   error,
    //   needsEmailVerification,
    // });
    // if (error) {
    //   Alert.alert('ohhh', error.message);
    // }
    // if (needsEmailVerification) {
    //   Alert.alert('verify your email in the followed link');
    // }
    // if (isSuccess) {
    //   router.push('/auth/SignInScreen/SignInScreen');
    // }

    // try {
    //   // sign up
    //   const res = await nhost.auth.signUp({ email, password });
    //   const { session, error } = res;

    //   console.log(session, error);
    //   if (error) {
    //     Alert.alert('ohhh', error.message);
    //   }
    //   if (session) {
    //     Alert.alert('Welcome', 'verify your email in the followed link');
    //     router.push('/auth/SignInScreen/SignInScreen');
    //   }
    // } catch (e) {
    //   console.log(e);
    //   Alert.alert('Oops', (e as Error).message);
    // }
  };

  const onSignInPress = () => {
    router.push({ pathname: '/auth/SignInScreen' });
  };

  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed');
  };

  const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed');
  };

  return (
    <Theme name="dark">
      <YStack flex={1} alignItems="center" justifyContent="center" paddingHorizontal={20}>
        <Text style={styles.title}>Create an account</Text>

        <CustomInput
          name="name"
          control={control}
          placeholder="Name"
          rules={{
            required: 'Name is required',
            minLength: {
              value: 3,
              message: 'Name should be at least 3 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Name should be max 24 characters long',
            },
          }}
        />

        <CustomInput
          name="email"
          control={control}
          placeholder="Email"
          rules={{
            required: 'Email is required',
            pattern: { value: EMAIL_REGEX, message: 'Email is invalid' },
          }}
        />
        <CustomInput
          name="password"
          control={control}
          placeholder="Password"
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
          }}
        />
        <CustomInput
          name="password-repeat"
          control={control}
          placeholder="Repeat Password"
          secureTextEntry
          rules={{
            validate: (value: any) => value === pwd || 'Password do not match',
          }}
        />

        {/* <CustomButton
          text={isLoading ? 'Register...' : 'Register'}
          onPress={handleSubmit(onRegisterPressed)}
        /> */}

        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>

        <SocialSignInButtons />
        <CustomButton text="Have an account? Sign in" onPress={onSignInPress} type="TERTIARY" />
      </YStack>
    </Theme>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default SignUpScreen;
