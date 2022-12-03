import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
  RefreshControl,
} from 'react-native';
import { Post } from '../components/Post';

export const FeedScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    fetch('/api/getFeedContent').then(res => {
      setData(JSON.parse(res._bodyText));
      setIsLoading(false);
    });
  }, []);

  const onRefresh = () => {
    setIsRefreshing(true);
    fetch('/api/getFeedContent').then(res => {
      setData(JSON.parse(res._bodyText));
      setIsRefreshing(false);
    });
  };
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator color={'#841584'} size={'large'} />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => <Post {...item} />}
          keyExtractor={(item, index) => index}
          onRefresh={onRefresh}
          refreshing={isRefreshing}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
