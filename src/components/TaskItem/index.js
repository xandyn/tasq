import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import moment from 'moment';

import Divider from '../Divider';
import styles, { colors } from './styles';


const TaskItem = ({ item: { date, text, status }, showDivider }) => (
  <View style={styles.container}>
    <View style={styles.item}>
      <Text style={styles.due}>
        {moment(date).format('h:mm a')}
      </Text>
      <Text style={styles.text} ellipsizeMode="tail" numberOfLines={1}>
        {text}
      </Text>
      <View style={[styles.color, { backgroundColor: colors.taskStatus[status] }]} />
    </View>
    {showDivider && <Divider />}
  </View>
);


TaskItem.propTypes = {
  item: PropTypes.object.isRequired,
  showDivider: PropTypes.bool.isRequired,
};


export default TaskItem;
