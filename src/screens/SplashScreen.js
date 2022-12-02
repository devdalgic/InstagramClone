import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-ionicons';

export const SplashScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Icon name={'add'} />
    </View>
  );
};
