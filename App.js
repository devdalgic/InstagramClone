/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { createContext, useEffect, useState } from 'react';
import type { Node } from 'react';
import { StyleSheet, Text } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './src/screens/LoginScreen';
import { createServer } from 'miragejs';
import { mockServerConfig } from './src/utils/MockServerConfig';
import { FeedScreen } from './src/screens/FeedScreen';
import { SearchScreen } from './src/screens/SearchScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

if (window.server) {
  // eslint-disable-next-line no-undef
  server.shutdown();
}

window.server = createServer(mockServerConfig);

const Stack = createNativeStackNavigator();

export const AuthContext = createContext();

const App: () => Node = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <NavigationContainer>
      <AuthContext.Provider value={{ isSignedIn, setIsSignedIn }}>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerTitleAlign: 'center' }}>
          {isSignedIn ? (
            <>
              <Stack.Screen
                name="Feed"
                component={FeedScreen}
                options={({ navigation }) => ({
                  headerLeft: () => (
                    <Icon.Button
                      name="sign-out"
                      onPress={() => setIsSignedIn(false)}
                      backgroundColor="#841584">
                      <Text style={styles.headerButtonText}>Logout</Text>
                    </Icon.Button>
                  ),
                  headerRight: () => (
                    <Icon.Button
                      name="search"
                      onPress={() => navigation.navigate('Search')}
                      backgroundColor="#841584">
                      <Text style={styles.headerButtonText}>Search</Text>
                    </Icon.Button>
                  ),
                })}
              />
              <Stack.Screen name="Search" component={SearchScreen} />
            </>
          ) : (
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
          )}
        </Stack.Navigator>
      </AuthContext.Provider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerButtonText: {
    color: 'white',
  },
});

export default App;
