import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';


const Button = ({ title, ...props }) => (
  <TouchableOpacity activeOpacity={0.7} {...props}>
    <View style={styles.btn}>
      <Text style={styles.btnText}>{title}</Text>
    </View>
  </TouchableOpacity>
);


Button.propTypes = {
  title: PropTypes.string.isRequired,
};


export default Button;
