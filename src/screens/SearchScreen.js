import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import { width } from '../utils/constants';

export const SearchScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    fetch('/api/getSearchContent').then(res => {
      setData(JSON.parse(res._bodyText));
      setIsLoading(false);
      console.log(res._bodyText);
    });
  }, []);

  const refresh = () => {
    setIsLoading(true);
    fetch('/api/getSearchContent').then(res => {
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
          numColumns={3}
          horizontal={false}
          data={data}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item.source }}
              style={{ width: width / 3, height: 300 }}
            />
          )}
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
