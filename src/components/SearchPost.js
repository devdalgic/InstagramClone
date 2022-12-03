import React from 'react';
import { StyleSheet } from 'react-native';
import { width } from '../utils/constants';
import { LoadingImage } from './LoadingImage';
import { LoadingVideo } from './LoadingVideo';

export const SearchPost = ({ item }) => {
  return item.type === 'image' ? (
    <LoadingImage source={item.source} style={styles.image} />
  ) : (
    <LoadingVideo source={item.source} style={styles.video} />
  );
};

const styles = StyleSheet.create({
  image: {
    width: width / 3,
    height: 300,
  },
  video: {
    width: width / 3,
    height: 300,
  },
});
