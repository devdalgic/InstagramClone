import React from 'react';
import renderer from 'react-test-renderer';
import { Caption } from '../src/components/Caption';
import { LoadingVideo } from '../src/components/LoadingVideo';
import { NetworkIndicator } from '../src/components/NetworkIndicator';
import { LikedBy } from '../src/components/LikedBy';
import { LoadingImage } from '../src/components/LoadingImage';
import { LoadingIndicator } from '../src/components/LoadingIndicator';
import { Logo } from '../src/components/Logo';
import { SwiperImage } from '../src/components/SwiperImage';
import { UserHeader } from '../src/components/UserHeader';

/**
 * Snapshot tests to test component trees.
 */

test('Caption renders correctly', () => {
  const tree = renderer
    .create(<Caption postedBy={'test'} caption={['test']} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('LikedBy renders correctly', () => {
  const tree = renderer.create(<LikedBy likedBy={'test'} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('LoadingImage renders correctly', () => {
  const tree = renderer
    .create(<LoadingImage source={'test'} style={{ test: 'test' }} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('LoadingIndicator renders correctly', () => {
  const tree = renderer.create(<LoadingIndicator />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('LoadingVideo renders correctly', () => {
  const tree = renderer
    .create(<LoadingVideo source={'test'} style={{ test: 'test' }} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Logo renders correctly', () => {
  const tree = renderer.create(<Logo />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('NetworkIndicator renders correctly', () => {
  const tree = renderer.create(<NetworkIndicator />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('SwiperImage renders correctly', () => {
  const tree = renderer.create(<SwiperImage media={['test']} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('UserHeader renders correctly', () => {
  const tree = renderer.create(<UserHeader username={'test'} />).toJSON();
  expect(tree).toMatchSnapshot();
});
