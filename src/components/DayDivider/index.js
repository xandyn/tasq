import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import Label from '../Label';

import styles from './styles';


const DayDivider = ({ date }) => (
  <View style={styles.container}>
    <Label style={styles.text} upperCase text={date} />
  </View>
);


DayDivider.propTypes = {
  date: PropTypes.string.isRequired,
};


export default DayDivider;
