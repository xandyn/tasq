import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles, { colors } from './styles';


const MenuItem = ({ icon, title, active, ...props }) => (
  <TouchableOpacity activeOpacity={0.6} {...props}>
    <View style={styles.item}>
      <Icon
        style={[styles.icon, {
          opacity: active ? 1 : 0.6
        }]}
        name={`ios-${icon}-outline`}
        color={active ? colors.pink : colors.primary}
        size={28}
      />
      <Text
        style={[styles.title, {
          color: active ? colors.pink : colors.primary
        }]}
      >
        {title}
      </Text>
    </View>
  </TouchableOpacity>
);


MenuItem.defaultProps = {
  active: false,
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  active: PropTypes.bool,
};


export default MenuItem;
