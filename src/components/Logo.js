import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet, Text, View } from 'react-native';

export const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Icon name="cat" color={'#841584'} size={192} style={styles.logo} />
      <Text style={styles.info}>Case Study by Denizhan Dalgic</Text>
      <Text style={styles.info}>Instagram Clone</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    marginVertical: 10,
  },
  info: {
    color: 'black',
  },
});
