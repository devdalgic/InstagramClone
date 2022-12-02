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
  const [data, setData] = useState();

  useEffect(() => {
    fetch('/api/getFeedContent').then(res => {
      setData(JSON.parse(res._bodyText));
      setIsLoading(false);
    });
  }, []);

  const refresh = () => {
    setIsLoading(true);
    fetch('/api/getFeedContent').then(res => {
      setData(res);
    });
    setIsLoading(false);
  };
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator color={'#841584'} />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => <Post {...item} />}
          keyExtractor={(item, index) => index}
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
