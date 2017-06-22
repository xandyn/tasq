import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import GradientBackground from '../GradientBackground';
import { letterSpacing } from '../../utils';

import styles from './styles';


const MonthNavigator = ({ onMonthChange, month, year }) => (
  <GradientBackground>
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.arrow}
        onPress={onMonthChange('prev')}
      >
        <Icon name="ios-arrow-back" color="white" size={20} />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.month}>{month}</Text>
        <Text style={styles.year}>{letterSpacing(year)}</Text>
      </View>
      <TouchableOpacity
        style={styles.arrow}
        onPress={onMonthChange('next')}
      >
        <Icon name="ios-arrow-forward" color="white" size={20} />
      </TouchableOpacity>
    </View>
  </GradientBackground>
);


MonthNavigator.propTypes = {
  onMonthChange: PropTypes.func.isRequired,
  month: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};


export default MonthNavigator;
