import 'react-native';
import renderer from 'react-test-renderer';

import React from 'react';
import Home from '../src/containers/Home';


it('renders correctly', () => {
  const tree = renderer.create(
    <Home />
  );
});
