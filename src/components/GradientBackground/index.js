import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';


const GradientBackground = ({ children, style, ...props }) => (
  <LinearGradient
    style={[styles.container, style]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    locations={[0, 0.15, 0.85, 1]}
    colors={[
      'rgba(255, 255, 255, 0.02)',
      'rgba(255, 255, 255, 0.05)',
      'rgba(255, 255, 255, 0.05)',
      'rgba(255, 255, 255, 0.02)'
    ]}
    {...props}
  >
    {children}
  </LinearGradient>
);


GradientBackground.defaultProps = {
  style: undefined,
};

GradientBackground.propTypes = {
  children: PropTypes.any.isRequired,
  style: PropTypes.number,
};


export default GradientBackground;
