import React, { useState } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { LoadingIndicator } from './LoadingIndicator';

/**
 * An image component based on the Image component. Shows loading indicator
 * while loading.
 */
export const LoadingImage = ({ source, style }) => {
  const [isLoading, setIsLoading] = useState(true);
  const onLoadEnd = () => {
    setIsLoading(false);
  };
  return (
    <View style={styles.container}>
      <Image source={{ uri: source }} style={style} onLoadEnd={onLoadEnd} />
      <LoadingIndicator animating={isLoading} />
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
});
