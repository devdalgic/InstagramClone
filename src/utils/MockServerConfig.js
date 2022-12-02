import { Response } from 'miragejs';

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
  },
};
