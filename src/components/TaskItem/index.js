import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import moment from 'moment';

import Divider from '../Divider';
import styles, { colors } from './styles';


const TaskItem = ({ item: { date, description, status }, showDividers }) => (
  <View style={styles.container}>
    <View style={styles.item}>
      <Text style={styles.due}>
        {moment(date).format('h:mm a')}
      </Text>
      <Text style={styles.text} ellipsizeMode="tail" numberOfLines={1}>
        {description}
      </Text>
      <View style={[styles.color, { backgroundColor: colors.taskStatus[status] }]} />
    </View>
    {showDividers && <Divider />}
  </View>
);


TaskItem.propTypes = {
  item: PropTypes.object.isRequired,
  showDividers: PropTypes.bool.isRequired,
};


export default TaskItem;
