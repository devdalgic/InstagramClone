import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import { width } from '../utils/constants';
import Video from 'react-native-video';

export const SearchScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    fetch('/api/getSearchContent').then(res => {
      setData(JSON.parse(res._bodyText));
      setIsLoading(false);
    });
  }, []);

  const onRefresh = () => {
    setIsRefreshing(true);
    fetch('/api/getSearchContent').then(res => {
      setData(JSON.parse(res._bodyText));
      setIsRefreshing(false);
    });
  };
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator color={'#841584'} />
      ) : (
        <FlatList
          numColumns={3}
          horizontal={false}
          data={data}
          onRefresh={onRefresh}
          refreshing={isRefreshing}
          renderItem={({ item }) =>
            item.type === 'image' ? (
              <Image source={{ uri: item.source }} style={styles.image} />
            ) : (
              <Video
                source={{ uri: item.source }}
                style={styles.video}
                repeat={true}
                resizeMode={'cover'}
              />
            )
          }
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
  image: {
    width: width / 3,
    height: 300,
  },
  video: {
    width: width / 3,
    height: 300,
  },
});
