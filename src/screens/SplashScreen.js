import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Icon name="cube" color={'black'} size={192} style={styles.logo} />
      <Text style={styles.info}>Case Study by Denizhan Dalgic</Text>
      <Text style={styles.info}>Instagram Clone</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  logo: {
    marginHorizontal: 10,
  },
  info: {
    color: 'black',
  },
});
