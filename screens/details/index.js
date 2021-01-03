// @flow

import * as React from 'react';
import { Button, Text } from 'react-native';
import { styles } from './assets/styles';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { itemId, otherParam } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Text>Details Screen</Text>
      <Text>itemId: {itemId ? JSON.stringify(itemId) : 0}</Text>
      <Text>otherParam: {otherParam && JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()} />
    </SafeAreaView>
  );
}
