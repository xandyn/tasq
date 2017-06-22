import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Label from '../Label';

import styles, { colors } from './styles';


const TotalTasksInfoItem = ({ type, count, percents }) => (
  <View style={styles.item}>
    <View style={styles.itemContainer}>
      <View style={[styles.graph, { backgroundColor: colors.taskStatus[type] }]} />
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
