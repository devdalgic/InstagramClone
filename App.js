/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { createContext, useEffect, useState } from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from './src/screens/SplashScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { createServer } from 'miragejs';
import { mockServerConfig } from './src/utils/MockServerConfig';

if (window.server) {
  server.shutdown();
}

window.server = createServer(mockServerConfig);

const Stack = createNativeStackNavigator();

export const AuthContext = createContext();

const App: () => Node = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    fetch('/api/init').then(res => {
      if (res.ok) {
        setIsLoading(false);
      }
    });
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }
  return (
    <NavigationContainer>
      <AuthContext.Provider value={{ isSignedIn, setIsSignedIn }}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={LoginScreen} />
        </Stack.Navigator>
      </AuthContext.Provider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
