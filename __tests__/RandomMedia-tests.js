import { getRandomPicture, getRandomVideo } from '../src/utils/RandomMedia';

/**
 * Tests related to random media.
 */

test('Random picture is chosen correctly', () => {
  const randomPicture = getRandomPicture();
  expect(randomPicture).toBeString();
});

test('Random video is chosen correctly', () => {
  const randomVideo = getRandomVideo();
  expect(randomVideo).toBeString();
});
