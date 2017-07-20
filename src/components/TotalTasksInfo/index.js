import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import Divider from '../Divider';
import TotalTasksInfoItem from '../TotalTasksInfoItem';

import styles from './styles';


const TotalTasksInfo = ({ completed, snoozed, overdue, total }) => (
  <View style={styles.container}>
    <TotalTasksInfoItem type="completed" count={completed} percents={completed / total} />
    <Divider />
    <TotalTasksInfoItem type="snoozed" count={snoozed} percents={snoozed / total} />
    <Divider />
    <TotalTasksInfoItem type="overdue" count={overdue} percents={overdue / total} />
  </View>
);

TotalTasksInfo.propTypes = {
  completed: PropTypes.number.isRequired,
  snoozed: PropTypes.number.isRequired,
  overdue: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};


export default TotalTasksInfo;
