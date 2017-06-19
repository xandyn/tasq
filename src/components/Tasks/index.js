import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import TaskItem from '../TaskItem';

import styles from './styles';


const Tasks = ({ tasks }) => (
  <View style={styles.container}>
    {tasks.map(item => <TaskItem key={item.id} item={item} />)}
  </View>
);


Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
};


export default Tasks;
