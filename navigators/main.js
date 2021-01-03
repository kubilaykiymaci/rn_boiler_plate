// @flow

import * as React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import DetailsScreen from '../screens/details';
import ProfileScreen from '../screens/profile';
import { defaultHeader } from '../utils/helpers/header';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ ...defaultHeader }}>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home Stack' }} />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{ title: 'Details Stack' }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={({ route }) => ({
              title: route.params.name,
              headerRight: () => (
                // eslint-disable-next-line no-alert
                <Button onPress={() => alert('This is a button!')} title="Info" color="#fff" />
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
