import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { FeedPost } from '../components/FeedPost';
import { LoadingIndicator } from '../components/LoadingIndicator';

/**
 * Shows posts as a list with details like the poster's username, actions and
 * like count. Has infinite scrolling. Shows indicator while loading.
 */
export const FeedScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isGettingMore, setIsGettingMore] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [data, setData] = useState();

  const apiPath = '/api/getFeedContent';

  // Get data for the first time.
  useEffect(() => {
    fetch(apiPath).then(res => {
      setData(JSON.parse(res._bodyText));
      setIsLoading(false);
    });
  }, []);

  // Get new data on refresh.
  const onRefresh = () => {
    setIsRefreshing(true);
    fetch(apiPath).then(res => {
      setData(JSON.parse(res._bodyText));
      setIsRefreshing(false);
    });
  };
  // Get more data when reached the end of the list (infinite scrolling).
  const getMoreContent = () => {
    setIsGettingMore(true);
    fetch(apiPath).then(res => {
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
