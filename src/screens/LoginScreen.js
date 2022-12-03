import React, { useContext, useState } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';
import { AuthContext } from '../../App';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const LoginScreen = () => {
  const [username, onChangeUsername] = useState();
  const [password, onChangePassword] = useState();

  const [isLoading, setIsLoading] = useState(false);

  const { isSignedIn, setIsSignedIn } = useContext(AuthContext);

  const Login = async () => {
    setIsLoading(true);
    try {
      fetch('/api/login').then(res => {
        if (res.ok) {
          EncryptedStorage.setItem(
            'user_session',
            JSON.stringify({
              username: username,
              password: password,
            }),
          ).then(() => {
            setIsSignedIn(true);
          });
        }
      });
    } catch (error) {
      // There was an error on the native side
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Icon name="cat" color={'#841584'} size={192} style={styles.logo} />
        <Text style={styles.info}>Case Study by Denizhan Dalgic</Text>
        <Text style={styles.info}>Instagram Clone</Text>
      </View>
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeUsername}
        value={username}
        editable={!isLoading}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        editable={!isLoading}
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.button}
        onPress={Login}
        disabled={isLoading}>
        {isLoading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={{ color: 'white' }}>Login</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  logoContainer: {
    alignItems: 'center',
  },
  label: {
    color: 'black',
    marginStart: 12,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#841584',
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  logo: {
    marginVertical: 10,
  },
  info: {
    color: 'black',
  },
});
