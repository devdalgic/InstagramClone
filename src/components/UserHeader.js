import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

/**
 * Component to show a post's poster name and avatar.
 */
export const UserHeader = ({ username }) => {
  return (
    <View style={styles.container}>
      <Icon
        name={'user-circle'}
        size={32}
        color={'#841584'}
        style={styles.avatarImage}
      />
      <Text style={styles.usernameText}>{username}</Text>
    </View>
  );
};

UserHeader.propTypes = {
  username: PropTypes.string,
};

const styles = StyleSheet.create({
  avatarImage: {
    marginRight: 10,
    borderRadius: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
    marginStart: 10,
  },
  usernameText: {
    color: 'black',
  },
});
