import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { FeedPost } from '../components/FeedPost';
import { LoadingIndicator } from '../components/LoadingIndicator';

export const FeedScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isGettingMore, setIsGettingMore] = useState(false);
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
  const getMoreContent = () => {
    setIsGettingMore(true);
    fetch('/api/getFeedContent').then(res => {
      setData(data.concat(JSON.parse(res._bodyText)));
      setIsGettingMore(false);
    });
  };
  return (
    <View style={styles.container}>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => <FeedPost {...item} />}
          keyExtractor={item => item.id}
          onRefresh={onRefresh}
          refreshing={isRefreshing}
          onEndReached={getMoreContent}
          ListFooterComponent={LoadingIndicator(isGettingMore)}
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
