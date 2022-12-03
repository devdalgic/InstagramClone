import React from 'react';
import { Image, FlatList, ImageBackground } from 'react-native';
import { width, height } from '../utils/constants';
import { LoadingImage } from './LoadingImage';

export const SwiperImage = props => {
  // console.log(media.media[0]);
  const renderItem = item => {
    // return <Image source={{ uri: item }} style={{ width: 500, height: 300 }} />;
    return <LoadingImage source={item} />;
  };

  return (
    <FlatList
      data={props.media}
      renderItem={({ item }) => renderItem(item)}
      horizontal={true}
      decelerationRate={'normal'}
      snapToInterval={width}
      snapToAlignment={'start'}
      showsHorizontalScrollIndicator={false}
    />
  );
};
