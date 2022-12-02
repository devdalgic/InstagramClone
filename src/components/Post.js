import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SwiperImage } from './SwiperImage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { username } from 'react-lorem-ipsum';

export const Post = ({ username: postedBy, caption, media = [] }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState();
  const [likedBy, setLikedBy] = useState('');

  const [tapCount, setTapCount] = useState(0);

  useEffect(() => {
    setLikedBy(username());
  }, []);

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
          <Text style={styles.usernameText}>{postedBy}</Text>
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
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={styles.captionText}>Liked by </Text>
            <Text style={styles.captionText}>{likedBy}</Text>
            <Text style={styles.captionText}> and others</Text>
          </View>
        </View>
        <View style={styles.captionContainer}>
          <Text style={styles.captionUsernameText}> {postedBy} </Text>
          <Text style={styles.captionText}> {caption} </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  header: {
    padding: 0,
  },
  avatarImage: {
    marginRight: 10,
    borderRadius: 20,
  },
  headerUserContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
    marginStart: 10,
  },
  locationText: {
    fontSize: 12,
  },
  infoContainer: {
    flex: 1,
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
