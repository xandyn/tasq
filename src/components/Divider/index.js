import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';


const Divider = ({ color, gradientWidth }) => (
  <LinearGradient
    style={styles.line}
    start={{ x: 0.01, y: 0 }}
    end={{ x: 0.99, y: 0 }}
    locations={[0, 1 - gradientWidth, gradientWidth, 1]}
    colors={[
      'rgba(255, 255, 255, 0.0)',
      color,
      color,
      'rgba(255, 255, 255, 0.0)'
    ]}
  />
);


Divider.defaultProps = {
  color: '#ffffff',
  gradientWidth: 0.78
};

Divider.propTypes = {
  color: PropTypes.string,
  gradientWidth: PropTypes.number,
};


export default Divider;
