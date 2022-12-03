import React, { useState } from 'react';
import Video from 'react-native-video';
import { LoadingIndicator } from './LoadingIndicator';

export const LoadingVideo = ({ source, style }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <Video
        source={{ uri: source }}
        style={style}
        repeat={true}
        posterResizeMode={'cover'}
        resizeMode={'cover'}
        onBuffer={({ isBuffering }) => setIsLoading(isBuffering)}
      />
      <LoadingIndicator animating={isLoading} />
    </>
  );
};
