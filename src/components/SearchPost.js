import React from 'react';
import { StyleSheet } from 'react-native';
import { width } from '../utils/constants';
import { LoadingImage } from './LoadingImage';
import { LoadingVideo } from './LoadingVideo';
import PropTypes from 'prop-types';

/**
 * A post to be shown in search screen's grid. Can either be an image or a
 * video.
 */
export const SearchPost = ({ item }) => {
  return item.type === 'image' ? (
    <LoadingImage source={item.source} style={styles.image} />
  ) : (
    <LoadingVideo source={item.source} style={styles.video} />
  );
};

SearchPost.propTypes = {
  item: PropTypes.object.isRequired,
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
