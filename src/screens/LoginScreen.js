import React, { useContext, useRef, useState } from 'react';
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
  const [username, onChangeUsername] = useState('');
  const [usernameInputStyle, setUsernameInputStyle] = useState(styles.input);
  const [password, onChangePassword] = useState('');
  const [passwordInputStyle, setPasswordInputStyle] = useState(styles.input);

  const [isLoading, setIsLoading] = useState(false);

  // Need to use the same context from the parent to communicate.
  const { isSignedIn, setIsSignedIn } = useContext(AuthContext);

  // Fetch login from API and Save login information.
  const Login = async () => {
    let filledCorrectly = true;
    if (username === '') {
      setUsernameInputStyle(styles.wrongInput);
      filledCorrectly = false;
    }
    if (password === '') {
      setPasswordInputStyle(styles.wrongInput);
      filledCorrectly = false;
    }
    if (filledCorrectly) {
      setUsernameInputStyle(styles.input);
      setPasswordInputStyle(styles.input);
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
    }
  };
  // Need ref to change focus from username input to password input
  const passwordInput = useRef();
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={usernameInputStyle}
        onChangeText={onChangeUsername}
        value={username}
        editable={!isLoading}
        keyboardType="email-address"
        returnKeyType="next"
        onSubmitEditing={() => {
          passwordInput.current.focus();
        }}
        blurOnSubmit={false}
        onFocus={() => setUsernameInputStyle(styles.activeInput)}
        onBlur={() => setUsernameInputStyle(styles.input)}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        ref={passwordInput}
        style={passwordInputStyle}
        onChangeText={onChangePassword}
        value={password}
        editable={!isLoading}
        keyboardType="default"
        secureTextEntry
        onSubmitEditing={Login}
        onFocus={() => setPasswordInputStyle(styles.activeInput)}
        onBlur={() => setPasswordInputStyle(styles.input)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={Login}
        disabled={isLoading}
        hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}>
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
    paddingBottom: 30,
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
    borderRadius: 5,
  },
  activeInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'black',
    borderRadius: 5,
    borderColor: '#841584',
  },
  wrongInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'black',
    borderRadius: 5,
    borderColor: 'red',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#841584',
    paddingVertical: 10,
    marginHorizontal: 10,
    marginTop: 20,
    borderRadius: 5,
  },
});
