export const getRandomPicture = () => {
  return randomMedia[Math.floor(Math.random() * randomMedia.length)];
};

const randomMedia = [
  'https://images.pexels.com/photos/1540258/pexels-photo-1540258.jpeg',
  'https://images.pexels.com/photos/5805867/pexels-photo-5805867.jpeg',
  'https://images.pexels.com/photos/7411671/pexels-photo-7411671.jpeg',
  'https://images.pexels.com/photos/12955185/pexels-photo-12955185.jpeg',
  'https://images.pexels.com/photos/5596193/pexels-photo-5596193.jpeg',
];
