import React, { createContext, useState } from 'react';
import type { Node } from 'react';
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './src/screens/LoginScreen';
import { createServer } from 'miragejs';
import { mockServerConfig } from './src/utils/MockServerConfig';
import { FeedScreen } from './src/screens/FeedScreen';
import { SearchScreen } from './src/screens/SearchScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NetworkIndicator } from './src/components/NetworkIndicator';

// Check for server instance to prevent duplicates and shut it down.
if (window.server) {
  // eslint-disable-next-line no-undef
  server.shutdown();
}

// Create new mock server instance.
window.server = createServer(mockServerConfig);

const Stack = createNativeStackNavigator();

// Create context to let child communicate with its parent. Provided to children
// with AuthContext.Provider.
export const AuthContext = createContext();

/**
 * App component containing AuthContext. Shows login screen or feed and search
 * screens based on it.
 */
const App: () => Node = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <View style={styles.container}>
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
      <NetworkIndicator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerButtonText: {
    color: 'white',
  },
});

export default App;
