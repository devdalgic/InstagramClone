// @flow
/**
 * Functions to return random media to complement mock API.
 */

// Get a random picture URL selected from a predefined array.
export const getRandomPicture = (): string => {
  return randomPicture[Math.floor(Math.random() * randomPicture.length)];
};

// Get a random video URL selected from a predefined array.
export const getRandomVideo = (): string => {
  return randomVideo[Math.floor(Math.random() * randomVideo.length)];
};

// All pictures are larger than 10 MB
const randomPicture = [
  'https://images.pexels.com/photos/1540258/pexels-photo-1540258.jpeg',
  'https://images.pexels.com/photos/5805867/pexels-photo-5805867.jpeg',
  'https://images.pexels.com/photos/7411671/pexels-photo-7411671.jpeg',
  'https://images.pexels.com/photos/12955185/pexels-photo-12955185.jpeg',
  'https://images.pexels.com/photos/5596193/pexels-photo-5596193.jpeg',
];

const randomVideo = [
  'https://static.videezy.com/system/resources/previews/000/048/192/original/CatFamily1.mp4',
  'https://static.videezy.com/system/resources/previews/000/049/560/original/383A0423-20200510_Shutter_Cat.mp4',
  'https://static.videezy.com/system/resources/previews/000/046/091/original/feed_kitty_8.mp4',
  'https://static.videezy.com/system/resources/previews/000/049/909/original/Kittens_Are_Playing_On_The_Rocks_3_4k.mp4',
  'https://static.videezy.com/system/resources/previews/000/004/210/original/4.mp4',
  'https://static.videezy.com/system/resources/previews/000/049/107/original/160.mp4',
];
