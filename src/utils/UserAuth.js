import EncryptedStorage from 'react-native-encrypted-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

// String directing to login state and username
const userString = '@logged_user';

// Fetch from API and save credentials
export const loginUser = (username, password) => {
  return new Promise((resolve, reject) => {
    fetch('/api/login').then(res => {
      if (res.ok) {
        saveUserCredentials(username, password).then(() => {
          resolve(true);
        });
      } else {
        resolve(false);
      }
    });
  });
};

// Logout the user and save the new login state
export const logoutUser = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.removeItem(userString).then(() => {
      resolve(true);
    });
  });
};

// Check if the user is logged in
export const checkLoggedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(userString).then(r => {
      if (r === null) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
};

// Save user credentials. Saves username and password to encrypted storage and
// username to ordinary storage.
export const saveUserCredentials = (username, password) => {
  return new Promise((resolve, reject) => {
    EncryptedStorage.setItem(
      'user_session',
      JSON.stringify({
        username: username,
        password: password,
      }),
    ).then(() => {
      AsyncStorage.setItem(userString, username).then(() => {
        resolve(true);
      });
    });
  });
};
