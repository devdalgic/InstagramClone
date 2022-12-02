import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SwiperImage } from './SwiperImage';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Post = ({ username, caption, media = [] }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState();

  const [tapCount, setTapCount] = useState(0);
  // console.log(username);
  const onPress = () => {
    if (tapCount === 1) {
      doubleTap();
      setTapCount(0);
    } else {
      setTimeout(() => {
        setTapCount(0);
      }, 300);
    }
  };

  const doubleTap = () => {
    setIsLiked(!isLiked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerUserContainer}>
          <Icon
            name={'user-circle'}
            size={32}
            color={'black'}
            style={styles.avatarImage}
          />
          <Text style={styles.usernameText}>{username}</Text>
        </View>
        {media.length === 1 ? <View /> : <SwiperImage media={media} />}
        <View style={styles.infoContainer}>
          <TouchableOpacity onPress={doubleTap}>
            <Icon
              size={32}
              color={isLiked ? 'red' : 'black'}
              name={isLiked ? 'heart' : 'heart-o'}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.captionContainer}>
          <Text style={styles.captionUsernameText}> {username} </Text>
          <Text style={styles.captionText}> {caption} </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
  },
  header: {
    padding: 15,
  },
  avatarImage: {
    marginRight: 10,
    borderRadius: 20,
  },
  headerUserContainer: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
    marginStart: 10,
  },
  locationText: {
    fontSize: 12,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
    marginStart: 10,
  },
  captionContainer: {
    flex: 1,
    flexDirection: 'row',
    marginStart: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#841584',
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  usernameText: {
    color: 'black',
  },
  captionUsernameText: {
    fontWeight: 'bold',
    color: 'black',
  },
  captionText: {
    color: 'black',
    flexShrink: 1,
  },
});
