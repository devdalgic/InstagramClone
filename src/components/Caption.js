import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

/**
 * Component to show a post's caption with poster's username.
 */
export const Caption = ({ postedBy, caption }) => {
  return (
    <View style={styles.captionContainer}>
      <Text style={styles.captionText}>
        <Text style={styles.captionUsernameText}>{postedBy} </Text>
        {caption}{' '}
      </Text>
    </View>
  );
};

Caption.propTypes = {
  postedBy: PropTypes.string.isRequired,
  caption: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  captionContainer: {
    flex: 1,
    flexDirection: 'row',
    marginStart: 10,
    marginTop: 5,
  },
  captionUsernameText: {
    fontWeight: 'bold',
  },
  captionText: {
    color: 'black',
  },
});
