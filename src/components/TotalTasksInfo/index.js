import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import Divider from '../Divider';
import TotalTasksInfoItem from '../TotalTasksInfoItem';

import styles from './styles';


const TotalTasksInfo = ({ completed, snoozed, overdue }) => (
  <View style={styles.container}>
    <TotalTasksInfoItem type="completed" count={35} percents={100} />
    <Divider />
    <TotalTasksInfoItem type="snoozed" count={85} percents={100} />
    <Divider />
    <TotalTasksInfoItem type="overdue" count={18} percents={100} />
  </View>
);

TotalTasksInfo.propTypes = {
  completed: PropTypes.number.isRequired,
  snoozed: PropTypes.number.isRequired,
  overdue: PropTypes.number.isRequired,
};


export default TotalTasksInfo;
