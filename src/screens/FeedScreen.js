import React, { useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
  RefreshControl,
} from 'react-native';
import Icon from 'react-native-ionicons';
import { Post } from '../components/Post';

export const FeedScreen = () => {
  const [loading, setLoading] = useState(true);
  const [data] = useState();
  const refresh = () => {
    setLoading(true);
    // TODO
    setLoading(false);
  };
  const renderPost = ({ item: post }) => <Post {...post} />;
  const keyExtractor = item => item.id;
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          renderItem={renderPost}
          keyExtractor={keyExtractor}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={refresh} />
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
