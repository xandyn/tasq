import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Platform } from 'react-native';

import styles from './styles';


const BackgroundWrapper = ({ children }) =>
  Platform.OS === 'ios' ? children : (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        source={require('../../assets/img/bg.jpg')}
        style={styles.image}
        blurRadius={Platform.OS === 'ios' ? 120 : 50}
      >
        {children}
      </Image>
    </View>
);


BackgroundWrapper.propTypes = {
  children: PropTypes.node.isRequired
};


export default BackgroundWrapper;
