import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';


const NavHeader = ({ children }) => (
  <LinearGradient
    style={styles.container}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    locations={[0, 0.15, 0.85, 1]}
    colors={[
      'rgba(255, 255, 255, 0.02)',
      'rgba(255, 255, 255, 0.05)',
      'rgba(255, 255, 255, 0.05)',
      'rgba(255, 255, 255, 0.02)'
    ]}
  >
    {children}
  </LinearGradient>
);


NavHeader.propTypes = {
  children: PropTypes.any.isRequired,
};


export default NavHeader;
