import React from 'react';
import { Image, FlatList, ImageBackground } from 'react-native';
import { width, height } from '../utils/constants';

export const SwiperImage = media => {
  // console.log(media.media[0]);
  const renderItem = item => {
    return <Image source={{ uri: item }} style={{ width: 500, height: 200 }} />;
  };

  return (
    <FlatList
      data={media.media}
      renderItem={({ item }) => renderItem(item)}
      horizontal={true}
      decelerationRate={0}
      snapToInterval={width - 500}
      snapToAlignment={'center'}
      showsHorizontalScrollIndicator={false}
    />
  );
};
