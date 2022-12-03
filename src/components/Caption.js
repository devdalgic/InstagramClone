import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
 * Component to show a post's caption with poster's username.
 */
export const Caption = ({ postedBy, caption }) => {
  return (
    <View style={styles.captionContainer}>
      <Text style={styles.captionText}>
        <Text style={styles.captionUsernameText}> {postedBy} </Text>
        {caption}{' '}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  captionContainer: {
    flex: 1,
    flexDirection: 'row',
    marginStart: 10,
  },
  captionUsernameText: {
    fontWeight: 'bold',
  },
  captionText: {
    color: 'black',
    flexShrink: 1,
  },
});
