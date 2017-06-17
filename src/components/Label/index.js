import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import { letterSpacing } from '../../utils';

import styles from './styles';


const Label = ({ upperCase, text, ...props }) => (
  <Text style={styles.label}>
    {letterSpacing(upperCase ? text.toUpperCase() : text)}
  </Text>
);


Label.defaultProps = {
  upperCase: false,
};

Label.propTypes = {
  upperCase: PropTypes.bool,
  text: PropTypes.string.isRequired,
};


export default Label;
