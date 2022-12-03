import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SwiperImage } from './SwiperImage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { username } from 'react-lorem-ipsum';

export const Post = ({ username: postedBy, caption, media = [] }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likedBy, setLikedBy] = useState('');
  const [isCommented, setIsCommented] = useState(false);
  const [isMessaged, setIsMessaged] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

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
  const toggleComment = () => {
    setIsCommented(!isCommented);
  };
  const toggleMessage = () => {
    setIsMessaged(!isMessaged);
  };
  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerUserContainer}>
          <Icon
            name={'user-circle'}
            size={32}
            color={'#841584'}
            style={styles.avatarImage}
          />
          <Text style={styles.usernameText}>{postedBy}</Text>
        </View>
        {media.length === 1 ? <View /> : <SwiperImage media={media} />}
        <View style={styles.infoContainer}>
          <View style={styles.actionContainer}>
            <TouchableOpacity onPress={doubleTap} style={styles.actionButton}>
              <Icon
                size={32}
                color={isLiked ? 'red' : 'black'}
                name={isLiked ? 'heart' : 'heart-o'}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={toggleComment}
              style={styles.actionButton}>
              <Icon
                size={32}
                color={'black'}
                name={isCommented ? 'comment' : 'comment-o'}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={toggleMessage}
              style={styles.actionButton}>
              <Icon
                size={32}
                color={'black'}
                name={isMessaged ? 'paper-plane' : 'paper-plane-o'}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={toggleBookmark}
              style={styles.bookmarkButton}>
              <Icon
                size={32}
                color={'black'}
                name={isBookmarked ? 'bookmark' : 'bookmark-o'}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.likedByContainer}>
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
  actionContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  actionButton: {
    marginHorizontal: 10,
  },
  bookmarkButton: {
    position: 'absolute',
    right: 20,
  },
  likedByContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
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
