# Instagram Clone
![Instagram Clone](cover.png)

![React Native](https://img.shields.io/badge/react_native%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Material UI](https://img.shields.io/badge/material%20ui%20-%230081CB.svg?&style=for-the-badge&logo=material-ui&logoColor=white)
![GitHub](https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white)

## Usage
- Login with your username and password.
- Explore your feed. Posts can be images or a video.
- Tap on search to see suggested posts shown in a grid.

## Tech Stack and Features
- Media loads without blocking the main/UI thread.
- Adaptable to different screen sizes and resolutions.
- Login information is saved to Android's EncryptedSharedPreferences and iOS' Keychain through [react-native-encrypted-storage](https://github.com/emeraldsanto/react-native-encrypted-storage).
- Based on custom components.
- Uses React Hooks.
- Post content is received from mock API created with [MirageJS](https://github.com/miragejs/miragejs).
- Checks network connection through [NetInfo](https://github.com/react-native-netinfo/react-native-netinfo).
- Videos play while scrolling.
- [ESLint](https://github.com/eslint/eslint) standardized code.
- Tested using [Jest](https://github.com/facebook/jest) and [react-native-testing-library](https://github.com/callstack/react-native-testing-library).
- Ready to build for Android.
