import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import styles from './styles';


const CreateButton = props => (
  <View style={styles.container}>
    <TouchableOpacity activeOpacity={0.7} {...props}>
      <View style={styles.btn}>
        <View style={styles.lineVertical} />
        <View style={styles.lineHorizontal} />
      </View>
    </TouchableOpacity>
  </View>
);


export default CreateButton;
