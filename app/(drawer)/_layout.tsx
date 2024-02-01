import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import useAuthStore from '../stores/authStore'; // import the store
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../auth/SignInScreen';
import SignUpScreen from '../auth/SignUpScreen';

const DrawerLayout = () => {
  const Stack = createNativeStackNavigator();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  console.log('isAuthenticated ' + isAuthenticated);

  if (!isAuthenticated) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="sign-up" component={SignUpScreen} options={{ title: 'Sign up' }} />
      </Stack.Navigator>
    );
  }
  return (
    <>
      <Drawer>
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
      </Drawer>
      {/* <Slot /> */}
    </>
  );
};

export default DrawerLayout;
