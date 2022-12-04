import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

/**
 * Component to show who liked a post along with others.
 */
export const LikedBy = ({ likedBy }) => {
  return (
    <View style={styles.likedByContainer}>
      <Text style={styles.text}>
        Liked by
        <Text style={styles.usernameText}> {likedBy} </Text>
        and others{' '}
      </Text>
    </View>
  );
};

LikedBy.propTypes = {
  likedBy: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  likedByContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },
  usernameText: {
    fontWeight: 'bold',
  },
  text: {
    color: 'black',
  },
});
