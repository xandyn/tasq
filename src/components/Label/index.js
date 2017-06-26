import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import { letterSpacing } from '../../utils';

import styles from './styles';


const Label = ({ upperCase, text, style, ...props }) => (
  <Text style={[styles.label, style]}>
    {letterSpacing(upperCase ? text.toUpperCase() : text)}
  </Text>
);


Label.defaultProps = {
  upperCase: false,
  style: undefined,
};

Label.propTypes = {
  upperCase: PropTypes.bool,
  style: PropTypes.any,
  text: PropTypes.string.isRequired,
};


export default Label;
