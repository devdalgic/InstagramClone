import { Response } from 'miragejs';
import { loremIpsum, username } from 'react-lorem-ipsum';
import { getRandomPicture } from './RandomMedia';

export const mockServerConfig = {
  routes() {
    this.get(
      '/api/login',
      () => {
        return new Response(200);
      },
      { timing: 1000 },
    );
    this.get('/api/getPicture', () => {
      return ['Interstellar', 'Inception', 'Dunkirk'];
    });
    this.get(
      '/api/login',
      () => {
        return new Response(200);
      },
      { timing: 2000 },
    );
    this.get('/api/getFeedContent', () => {
      return [
        {
          id: 0,
          username: username(),
          type: 'image',
          caption: loremIpsum({ avgSentencesPerParagraph: 1 }),
          media: [getRandomPicture(), getRandomPicture()],
        },
        {
          id: 1,
          username: username(),
          type: 'video',
          caption: loremIpsum({ avgSentencesPerParagraph: 1 }),
          media: [
            'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          ],
        },
        {
          id: 2,
          username: username(),
          type: 'image',
          caption: loremIpsum({ avgSentencesPerParagraph: 1 }),
          media: [getRandomPicture(), getRandomPicture()],
        },
        {
          id: 3,
          username: username(),
          type: 'image',
          caption: loremIpsum({ avgSentencesPerParagraph: 1 }),
          media: [getRandomPicture(), getRandomPicture()],
        },
        {
          id: 4,
          username: username(),
          type: 'image',
          caption: loremIpsum({ avgSentencesPerParagraph: 1 }),
          media: [getRandomPicture(), getRandomPicture()],
        },
      ];
    });
    this.get('/api/getSearchContent', () => {
      return [
        {
          id: 0,
          source: getRandomPicture(),
        },
        {
          id: 1,
          source: getRandomPicture(),
        },
        {
          id: 2,
          source: getRandomPicture(),
        },
        {
          id: 3,
          source: getRandomPicture(),
        },
        {
          id: 4,
          source: getRandomPicture(),
        },
        {
          id: 5,
          source: getRandomPicture(),
        },
        {
          id: 6,
          source: getRandomPicture(),
        },
        {
          id: 7,
          source: getRandomPicture(),
        },
        {
          id: 8,
          source: getRandomPicture(),
        },
        {
          id: 9,
          source: getRandomPicture(),
        },
      ];
    });
  },
};
