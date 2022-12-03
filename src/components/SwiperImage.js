import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { width } from '../utils/constants';
import { LoadingImage } from './LoadingImage';

export const SwiperImage = ({ media }) => {
  const renderItem = item => {
    return <LoadingImage source={item} style={styles.image} />;
  };

  return (
    <FlatList
      data={media}
      renderItem={({ item }) => renderItem(item)}
      horizontal={true}
      decelerationRate={'normal'}
      snapToInterval={width}
      snapToAlignment={'start'}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 500,
    height: 300,
  },
});
