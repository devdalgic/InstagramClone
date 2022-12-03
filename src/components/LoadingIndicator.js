import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

/**
 * An Activity Indicator with some predefined values
 */
export const LoadingIndicator = ({ animating = true, color = '#841584' }) => {
  return (
    <ActivityIndicator
      animating={animating}
      size={'large'}
      color={color}
      style={styles.activityIndicator}
    />
  );
};

LoadingIndicator.propTypes = {
  animating: PropTypes.bool,
  color: PropTypes.string,
};

const styles = StyleSheet.create({
  activityIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
