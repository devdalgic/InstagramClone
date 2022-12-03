import { Response } from 'miragejs';
import { loremIpsum, username } from 'react-lorem-ipsum';
import { getRandomPicture, getRandomVideo } from './RandomMedia';

const mediaTypes = ['image', 'image', 'video'];

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
      const objectCount = 10;
      let currentType = '';
      for (let i = 0; i < objectCount; i++) {
        currentType = mediaTypes[Math.floor(Math.random() * mediaTypes.length)];
        result.push({
          id: i,
          username: username(),
          type: currentType,
          caption: loremIpsum({ avgSentencesPerParagraph: 1 }),
          media:
            currentType === 'image'
              ? [getRandomPicture(), getRandomPicture()]
              : [getRandomVideo()],
        });
        console.log(currentType + result[result.length-1].media[0]);
      }
      return result;
    });
    this.get('/api/getSearchContent', () => {
      let result = [];
      const objectCount = 21;
      let currentType = '';
      for (let i = 0; i < objectCount; i++) {
        currentType = mediaTypes[Math.floor(Math.random() * mediaTypes.length)];
        result.push({
          id: i,
          type: currentType,
          source:
            currentType === 'image' ? getRandomPicture() : getRandomVideo(),
        });
      }
      return result;
    });
  },
};
