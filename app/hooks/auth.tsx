import React, { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import * as Facebook from 'expo-auth-session/providers/facebook';
import { AuthContext, UserInfo } from '../types';

// Other imports and type definitions...

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: '855449506346114',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      setIsLoading(true);

      const { accessToken } = response.authentication!;
      fetchUserInfo(accessToken);
    } else {
      setIsLoading(false);
    }
  }, [response]);

  const fetchUserInfo = async (accessToken: string) => {
    const userInfoResponse = await fetch(
      `https://graph.facebook.com/me?fields=id,picture,name&access_token=${accessToken}`
    );
    const userInfo = await userInfoResponse.json();
    setIsLoading(false);
    setUser(userInfo);
  };

  const signIn = async () => {
    setIsLoading(true);
    const result = await promptAsync();
    if (result.type !== 'success') {
      alert('something went wrong');
      return;
    }
  };

  const signOut = () => {
    setUser(null);
    // Perform any additional sign-out logic here
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use auth context
export const useAuth = () => useContext(AuthContext);
