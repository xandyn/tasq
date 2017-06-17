
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';

import styles from './styles';


const MenuHeader = ({ avatar, name, email }) => (
  <View style={styles.header}>
    <Image
      style={styles.avatar}
      source={avatar}
    />
    <View style={styles.info}>
      <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
        {name}
      </Text>
      <Text style={styles.email} numberOfLines={1} ellipsizeMode="tail">
        {email}
      </Text>
    </View>
  </View>
);


MenuHeader.propTypes = {
  avatar: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};


export default MenuHeader;
