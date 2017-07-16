import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import moment from 'moment';

import Label from '../../components/Label';

import styles from './styles';


const TodayInfo = ({ tasksTodo, tasksTotal }) => (
  <View style={styles.container}>
    <Text style={styles.week}>{moment().format('dddd')}</Text>
    <Label
      upperCase
      text={moment().format('MMMM D, YYYY')}
      style={styles.date}
    />
    <View style={styles.tasks}>
      <Text style={styles.tasksTodo}>{tasksTodo}</Text>
      <View style={styles.tasksTotal}>
        <Text style={styles.tasksTotalText}>{tasksTotal}</Text>
      </View>
    </View>
  </View>
);


TodayInfo.propTypes = {
  tasksTodo: PropTypes.number.isRequired,
  tasksTotal: PropTypes.number.isRequired,
};


export default TodayInfo;
