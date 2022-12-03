import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SwiperImage } from './SwiperImage';
import { username } from 'react-lorem-ipsum';
import { width } from '../utils/constants';
import { ActionButton } from './ActionButton';
import { UserHeader } from './UserHeader';
import { LikedBy } from './LikedBy';
import { Caption } from './Caption';
import { LoadingVideo } from './LoadingVideo';
import PropTypes from 'prop-types';

/**
 * A post to be shown in feed screen's list. Can either be multiple images or a
 * video.
 */
export const FeedPost = ({ username: postedBy, type, caption, media = [] }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likedBy, setLikedBy] = useState('');
  const [isCommented, setIsCommented] = useState(false);
  const [isMessaged, setIsMessaged] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [tapCount, setTapCount] = useState(0);

  // Create random username.
  useEffect(() => {
    setLikedBy(username());
  }, []);

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
  // Toggle like on the post.
  const doubleTap = () => {
    setIsLiked(!isLiked);
  };
  // Toggle comment button.
  const toggleComment = () => {
    setIsCommented(!isCommented);
  };
  // Toggle message button.
  const toggleMessage = () => {
    setIsMessaged(!isMessaged);
  };
  // Toggle bookmark button.
  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <View style={styles.container}>
      <UserHeader username={postedBy} />
      {type === 'image' ? (
        <SwiperImage media={media} />
      ) : (
        <LoadingVideo source={media[0]} style={styles.video} />
      )}
      <View style={styles.infoContainer}>
        <View style={styles.actionContainer}>
          <ActionButton
            onPress={doubleTap}
            style={styles.actionButton}
            colorCondition={isLiked}
            colorTrue={'red'}
            nameCondition={isLiked}
            nameTrue={'heart'}
            nameFalse={'heart-o'}
          />
          <ActionButton
            onPress={toggleComment}
            style={styles.actionButton}
            nameCondition={isCommented}
            nameTrue={'comment'}
            nameFalse={'comment-o'}
          />
          <ActionButton
            onPress={toggleMessage}
            style={styles.actionButton}
            nameCondition={isMessaged}
            nameTrue={'paper-plane'}
            nameFalse={'paper-plane-o'}
          />
          <ActionButton
            onPress={toggleBookmark}
            style={styles.bookmarkButton}
            nameCondition={isBookmarked}
            nameTrue={'bookmark'}
            nameFalse={'bookmark-o'}
          />
        </View>
        <LikedBy likedBy={likedBy} />
      </View>
      <Caption postedBy={postedBy} caption={caption} />
    </View>
  );
};

FeedPost.propTypes = {
  username: PropTypes.string,
  type: PropTypes.string.isRequired,
  caption: PropTypes.array,
  media: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
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
  captionUsernameText: {
    fontWeight: 'bold',
  },
  captionText: {
    color: 'black',
    flexShrink: 1,
  },
  video: {
    height: 300,
    width: width,
  },
});
