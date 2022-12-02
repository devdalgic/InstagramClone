import { Response } from 'miragejs';
import { loremIpsum, username } from 'react-lorem-ipsum';

export const mockServerConfig = {
  routes() {
    this.get(
      '/api/init',
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
          caption: loremIpsum({ avgSentencesPerParagraph: 1 }),
          media: [
            'https://images.pexels.com/photos/1540258/pexels-photo-1540258.jpeg',
            'https://images.pexels.com/photos/5805867/pexels-photo-5805867.jpeg',
          ],
        },
        {
          id: 1,
          username: username(),
          caption: loremIpsum({ avgSentencesPerParagraph: 1 }),
          media: [
            'https://images.pexels.com/photos/7411671/pexels-photo-7411671.jpeg',
            'https://images.pexels.com/photos/12955185/pexels-photo-12955185.jpeg',
          ],
        },
        {
          id: 2,
          username: username(),
          caption: loremIpsum({ avgSentencesPerParagraph: 1 }),
          media: [
            'https://images.pexels.com/photos/5596193/pexels-photo-5596193.jpeg',
            'https://images.pexels.com/photos/12955185/pexels-photo-12955185.jpeg',
          ],
        },
        {
          id: 3,
          username: username(),
          caption: loremIpsum({ avgSentencesPerParagraph: 1 }),
          media: [
            'https://images.pexels.com/photos/5596193/pexels-photo-5596193.jpeg',
            'https://images.pexels.com/photos/12955185/pexels-photo-12955185.jpeg',
          ],
        },
        {
          id: 4,
          username: username(),
          caption: loremIpsum({ avgSentencesPerParagraph: 1 }),
          media: [
            'https://images.pexels.com/photos/7411671/pexels-photo-7411671.jpeg',
            'https://images.pexels.com/photos/12955185/pexels-photo-12955185.jpeg',
          ],
        },
      ];
    });
  },
};
