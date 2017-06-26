import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';


const Button = ({ title, icon, style, ...props }) => (
  <TouchableOpacity activeOpacity={0.7} {...props}>
    <View style={[styles.btn, style]}>
      {icon && <Icon style={styles.icon} name={icon} size={30} color="white" />}
      <Text style={styles.btnText}>{title}</Text>
    </View>
  </TouchableOpacity>
);


Button.defaultProps = {
  icon: undefined,
  style: undefined,
};

Button.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.any,
  title: PropTypes.string.isRequired,
};


export default Button;
