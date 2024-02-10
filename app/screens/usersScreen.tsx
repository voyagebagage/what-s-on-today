import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, ListRenderItem } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../graphql/users/queries';
import { User } from '@nhost/react';
import { Separator, Spinner } from 'tamagui';

function UserScreen() {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  if (isLoading) {
    return (
      <View style={styles.center}>
        <Spinner size="large" color="blue" alignSelf="center" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }
  const renderItem: ListRenderItem<User> = ({ item }: { item: User }) => (
    <>
      <View style={styles.item}>
        <Text style={styles.name}>
          {item.displayName} - {item.email}
        </Text>
      </View>
      <Separator />
    </>
  );

  console.log(JSON.stringify(users, null, 2));

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        style={{ backgroundColor: 'violet' }}
        data={users}
        renderItem={renderItem}
        keyExtractor={(item: User) => item.id}
        // contentContainerStyle={{ alignItems: 'center' }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
  item: { padding: 1 },
  name: {
    fontSize: 18,
    // color: 'red',
  },
});

export default UserScreen;
