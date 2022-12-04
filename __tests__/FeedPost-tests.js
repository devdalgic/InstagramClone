import { fireEvent, render, screen } from '@testing-library/react-native';
import { ActionButton } from '../src/components/ActionButton';
import { loremIpsum, username } from 'react-lorem-ipsum';
import { FeedPost } from '../src/components/FeedPost';

/**
 * Tests related to FeedPost
 */

const dataObject = {
  id: 0,
  username: username(),
  caption: loremIpsum({ avgSentencesPerParagraph: 1 }),
  type: 'image',
  media: [
    'https://images.pexels.com/photos/1540258/pexels-photo-1540258.jpeg',
    'https://images.pexels.com/photos/5805867/pexels-photo-5805867.jpeg',
  ],
};

test('FeedPost handles like events correctly', () => {
  const post = render(<FeedPost {...dataObject} />);

  // Get the like button and icon
  const button = post.getAllByTestId('actionButton')[0];
  const icon = screen.getAllByTestId('actionButtonIcon')[0];

  // Post not liked
  expect(icon.props.name).toBe('heart-o');
  expect(icon.props.color).toBe('black');

  // Like post
  fireEvent.press(button);

  // Post liked
  expect(icon.props.name).toBe('heart');
  expect(icon.props.color).toBe('red');
});
