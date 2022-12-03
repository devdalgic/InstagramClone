import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { Post } from '../components/Post';

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
  const footerLoading = () => {
    return (
      <ActivityIndicator
        animating={isGettingMore}
        size={'large'}
        color={'#841584'}
      />
    );
  };
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator color={'#841584'} size={'large'} />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => <Post {...item} />}
          keyExtractor={item => item.id}
          onRefresh={onRefresh}
          refreshing={isRefreshing}
          onEndReached={getMoreContent}
          ListFooterComponent={footerLoading}
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
