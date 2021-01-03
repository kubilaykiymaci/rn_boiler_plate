// @flow

import * as React from 'react';
import { Button, Text } from 'react-native';
import { styles } from './assets/styles';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile', { name: 'Custom Profile Header' })}
      />
    </SafeAreaView>
  );
}
