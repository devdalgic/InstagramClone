import { createServer, Response } from 'miragejs';
import { loremIpsum, username } from 'react-lorem-ipsum';
import { getRandomPicture, getRandomVideo } from './RandomMedia';
import uuid from 'react-native-uuid';

export const createMockServer = () => {
  // Check for server instance to prevent duplicates and shut it down.
  if (window.server) {
    // eslint-disable-next-line no-undef
    server.shutdown();
  }

  // Create new mock server instance.
  window.server = createServer(mockServerConfig);
};

/**
 * Media types to choose from. Image has duplicate entry to increase its
 * chances.
 */
const mediaTypes = ['image', 'image', 'video'];

/**
 * Mock API to simulate real API calls with a default delay of 400 ms.
 */
export const mockServerConfig = {
  routes() {
    this.get(
      '/api/login',
      () => {
        return new Response(200);
      },
      { timing: 1000 },
    );
    this.get('/api/getFeedContent', () => {
      let result = [];
      const objectCount = 4;
      let currentType = '';
      for (let i = 0; i < objectCount; i++) {
        currentType = mediaTypes[Math.floor(Math.random() * mediaTypes.length)];
        result.push({
          id: uuid.v4(),
          username: username(),
          type: currentType,
          caption: loremIpsum({ avgSentencesPerParagraph: 1 }),
          media:
            currentType === 'image'
              ? [getRandomPicture(), getRandomPicture()]
              : [getRandomVideo()],
        });
      }
      return result;
    });
    this.get('/api/getSearchContent', () => {
      let result = [];
      const objectCount = 12;
      let currentType = '';
      for (let i = 0; i < objectCount; i++) {
        currentType = mediaTypes[Math.floor(Math.random() * mediaTypes.length)];
        result.push({
          id: uuid.v4(),
          type: currentType,
          source:
            currentType === 'image' ? getRandomPicture() : getRandomVideo(),
        });
      }
      return result;
    });
  },
};
