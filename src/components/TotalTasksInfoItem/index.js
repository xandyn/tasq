import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Circle from 'react-native-progress/Circle';

import Label from '../Label';

import styles, { colors } from './styles';


const TotalTasksInfoItem = ({ type, count, percents }) => (
  <View style={styles.item}>
    <View style={styles.itemContainer}>
      <Circle
        size={30}
        progress={0.5}
        unfilledColor="rgba(255,255,255,0.1)"
        borderWidth={0}
        thickness={2}
        color={colors.taskStatus[type]}
        style={styles.outerCircle}
      >
        <View style={[styles.innerCircle, { backgroundColor: colors.taskStatus[type] }]} />
      </Circle>
    </View>
    <View style={styles.itemContainer}>
      <Label style={styles.label} upperCase text={type} />
      <Text style={styles.number}>{count}</Text>
    </View>
    <View style={styles.itemContainer}>
      <TouchableOpacity style={styles.icon}>
        <Icon name="ios-list" size={35} color="white" />
      </TouchableOpacity>
    </View>
  </View>
);


TotalTasksInfoItem.propTypes = {
  type: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  percents: PropTypes.number.isRequired,
};


export default TotalTasksInfoItem;
