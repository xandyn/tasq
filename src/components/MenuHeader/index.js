import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';


const MenuHeader = ({ profile }) => (
  <View style={styles.header}>
    <Image
      style={styles.avatar}
      source={profile.avatar
        ? { uri: profile.avatar }
        : require('../../assets/img/avatar.png')
      }
    />
    {Object.keys(profile).length > 0 ?
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
          {profile.name}
        </Text>
        <Text style={styles.email} numberOfLines={1} ellipsizeMode="tail">
          {profile.email}
        </Text>
      </View>
      :
      <View style={styles.info}>
        <TouchableOpacity>
          <Text style={styles.loginBtn}>Login</Text>
        </TouchableOpacity>
      </View>
    }
  </View>
);


MenuHeader.propTypes = {
  profile: PropTypes.object.isRequired,
};


export default MenuHeader;
