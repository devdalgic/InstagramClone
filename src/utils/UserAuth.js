import EncryptedStorage from 'react-native-encrypted-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginUser = (username, password) => {
  return new Promise((resolve, reject) => {
    fetch('/api/login').then(res => {
      if (res.ok) {
        EncryptedStorage.setItem(
          'user_session',
          JSON.stringify({
            username: username,
            password: password,
          }),
        ).then(() => {
          AsyncStorage.setItem('@logged_user', username).then(() => {
            resolve(true);
          });
        });
      } else {
        resolve(false);
      }
    });
  });
};

export const logoutUser = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.removeItem('@logged_user').then(() => {
      resolve(true);
    });
  });
};

export const checkLoggedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('@logged_user').then(r => {
      if (r === null) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
};
