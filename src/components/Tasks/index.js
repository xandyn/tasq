import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import TaskItem from '../TaskItem';
import Divider from '../Divider';

import styles from './styles';


const Tasks = ({ tasks, showDividers, showEdgeDividers }) => (
  <View style={styles.container}>
    {showEdgeDividers && <Divider />}
    {tasks.map((item, index) => (
      <TaskItem
        key={item.id}
        item={item}
        showDividers={showDividers && tasks.length !== index + 1}
      />
    ))}
    {showEdgeDividers && <Divider />}
  </View>
);

Tasks.defaultProps = {
  showDividers: true,
  showEdgeDividers: false,
};

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  showDividers: PropTypes.bool,
  showEdgeDividers: PropTypes.bool,
};


export default Tasks;
