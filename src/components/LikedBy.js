import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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

const styles = StyleSheet.create({
  likedByContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
  },
  usernameText: {
    fontWeight: 'bold',
  },
  text: {
    color: 'black',
    flexShrink: 1,
  },
});
