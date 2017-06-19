import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import Label from '../../components/Label';

import styles from './styles';


const TodayInfo = ({ dayOfWeek, date, tasksTodo, tasksTotal }) => (
  <View style={styles.container}>
    <Text style={styles.week}>Wednesday</Text>
    <Label
      upperCase
      text="March 18, 2015"
      style={styles.date}
    />
    <View style={styles.tasks}>
      <Text style={styles.tasksTodo}>6</Text>
      <View style={styles.tasksTotal}>
        <Text style={styles.tasksTotalText}>10</Text>
      </View>
    </View>
  </View>
);


TodayInfo.propTypes = {
  dayOfWeek: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tasksTodo: PropTypes.number.isRequired,
  tasksTotal: PropTypes.number.isRequired,
};


export default TodayInfo;
