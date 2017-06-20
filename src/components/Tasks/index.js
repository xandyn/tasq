import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import TaskItem from '../TaskItem';

import styles from './styles';


const Tasks = ({ tasks }) => (
  <View style={styles.container}>
    {tasks.map((item, index) => (
      <TaskItem
        key={item.id}
        item={item}
        showDivider={tasks.length !== index + 1}
      />
    ))}
  </View>
);


Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
};


export default Tasks;
