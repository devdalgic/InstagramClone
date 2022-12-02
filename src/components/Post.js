import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export const Post = ({
  id,
  user,
  location,
  files = [],
  likeCount: likeCountProp,
  caption,
  isLiked: isLikedProp,
}) => {
  const [isLiked, setIsLiked] = useState(isLikedProp);
  const [likeCount, setLikeCount] = useState(likeCountProp);

  const [tapCount, setTapCount] = useState(0);

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
        <Image style={styles.avatarImage} />
        <View style={styles.headerUserContainer}>
          <Text>username</Text>
          <Text style={styles.location}>location</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarImage: {
    borderRadius: 20,
  },
  headerUserContainer: {
    marginLeft: 10,
  },
  locationText: {
    fontSize: 12,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#841584',
    paddingVertical: 10,
    marginHorizontal: 10,
  },
});
