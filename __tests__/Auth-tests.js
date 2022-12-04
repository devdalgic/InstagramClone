import {
  checkLoggedIn,
  logoutUser,
  saveUserCredentials,
} from '../src/utils/UserAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Tests related to authentication.
 */

test('Login state saved correctly', async () => {
  await saveUserCredentials('test', 'test');
  const isLoggedIn = await checkLoggedIn();
  expect(isLoggedIn).toBe(true);
});

test('Login state checked correctly', async () => {
  await AsyncStorage.setItem('@logged_user', 'test');
  const isLoggedIn = await checkLoggedIn();
  expect(isLoggedIn).toBe(true);
});

test('Logs user out correctly', async () => {
  await logoutUser();
  const isLoggedIn = await checkLoggedIn();
  expect(isLoggedIn).toBe(false);
});
