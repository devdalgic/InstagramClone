import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { LoadingIndicator } from '../components/LoadingIndicator';
import { SearchPost } from '../components/SearchPost';

/**
 * Shows posts as a grid with infinite scrolling. Shows indicator while loading.
 */
export const SearchScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isGettingMore, setIsGettingMore] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [data, setData] = useState();

  const apiPath = '/api/getSearchContent';

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
          numColumns={3}
          horizontal={false}
          data={data}
          onRefresh={onRefresh}
          refreshing={isRefreshing}
          onEndReached={getMoreContent}
          ListFooterComponent={LoadingIndicator(isGettingMore)}
          renderItem={({ item }) => <SearchPost item={item} />}
          keyExtractor={item => item.id}
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
