import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const CustomDrawerToggleButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <Ionicons name="md-menu" size={24} />
    </TouchableOpacity>
  );
};

const DrawerNavigatorConfig = {
  screenOptions: {
    headerRight: () => <CustomDrawerToggleButton />,
    // Remove headerLeft if it's already defined
    headerLeft: null,
  },
  // Other drawer configurations...
};
