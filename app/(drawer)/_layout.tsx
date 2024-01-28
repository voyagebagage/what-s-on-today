import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import useAuthStore from '../stores/authStore'; // import the store
// import SignUpScreen from 'app/authScreens/signUp';
import SignInScreen from 'app/authScreens/signIn';

const DrawerLayout = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  console.log('isAuthenticated' + isAuthenticated);
  if (!isAuthenticated) {
    // Render the SignInScreen or a similar component for unauthenticated users
    return <SignInScreen />;
  }
  return (
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
  );
};

export default DrawerLayout;
