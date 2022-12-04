import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock';

// Have to mock modules which use native modules as jest cannot work with them
jest.mock('react-native-video', () => 'Video');

jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);

jest.mock('react-native-vector-icons/FontAwesome', () => 'MockedFontAwesome');
jest.mock('react-native-vector-icons/FontAwesome5', () => 'MockedFontAwesome5');
