import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import styles from './styles';


const SortButton = props => (
  <View style={styles.container}>
    <TouchableOpacity activeOpacity={0.85} {...props}>
      <View style={styles.btn}>
        <View style={[styles.line, { width: 20 }]} />
        <View style={[styles.line, { width: 10 }]} />
        <View style={[styles.line, { width: 3.5 }]} />
      </View>
    </TouchableOpacity>
  </View>
);


export default SortButton;
