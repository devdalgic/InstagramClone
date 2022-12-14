import React, { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * Subscribes to network events and shows warning when there is no connection.
 */
export const NetworkIndicator = () => {
  const [isConnected, setIsConnected] = useState(true);

  // Subscribe to network events provided by NetInfo module
  useEffect(() => {
    NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
  }, []);

  // Show only when there is no connection
  return isConnected ? (
    <View />
  ) : (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Icon name={'warning'} color={'red'} style={styles.icon} size={24} />
        <Text style={styles.text}>Network Error</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 10,
    right: 10,
    bottom: 10,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  textContainer: {
    margin: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginEnd: 10,
  },
  text: {
    color: 'black',
  },
});
