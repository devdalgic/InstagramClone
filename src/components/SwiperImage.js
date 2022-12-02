import React from 'react';
import { Image, FlatList } from 'react-native';
import { width } from '../utils/constants';

export const SwiperImage = content => {
  const renderItem = item => {
    return <Image source={item.source} />;
  };

  return (
    <FlatList
      data={content}
      renderItem={({ item }) => renderItem(item)}
      horizontal={true}
      decelerationRate={0}
      snapToInterval={width - 60}
      snapToAlignment={'center'}
    />
  );
};
