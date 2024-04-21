import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from './customButton';

const SocialSignInButtons = () => {
  const onSignInFacebook = () => {
    console.warn('onSignInFacebook');
  };

  return (
    <CustomButton
      text="Sign In with Facebook"
      onPress={onSignInFacebook}
      bgColor="#3B71F3"
      fgColor="white"
    />
  );
};

export default SocialSignInButtons;
