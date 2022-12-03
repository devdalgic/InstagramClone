import React, { useContext, useState } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';
import { AuthContext } from '../../App';
import { LoadingIndicator } from '../components/LoadingIndicator';
import { Logo } from '../components/Logo';

/**
 * A login screen where the user can enter any input, and they will be logged in.
 * Their information will be saved to Encrypted Storage.
 */
export const LoginScreen = () => {
  const [username, onChangeUsername] = useState();
  const [password, onChangePassword] = useState();

  const [isLoading, setIsLoading] = useState(false);

  // Need to use the same context from the parent to communicate.
  const { isSignedIn, setIsSignedIn } = useContext(AuthContext);

  // Fetch login from API and Save login information.
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
      <Logo />
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
          <LoadingIndicator color={'white'} />
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
  label: {
    color: 'black',
    marginStart: 12,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'black',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#841584',
    paddingVertical: 10,
    marginHorizontal: 10,
  },
});
