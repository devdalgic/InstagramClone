import React, { useState } from 'react';
import { Image, View, ActivityIndicator, StyleSheet } from 'react-native';

export const LoadingImage = props => {
  const [isLoading, setIsLoading] = useState(true);
  const onLoadEnd = () => {
    setIsLoading(false);
  }
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: props.source }}
        style={styles.image}
        onLoadEnd={onLoadEnd}
      />
      <ActivityIndicator
        style={styles.activityIndicator}
        color={'#841584'}
        animating={isLoading}
        size={'large'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 500,
    height: 300,
  },
  activityIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
