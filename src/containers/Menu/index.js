import React from 'react';
import { View } from 'react-native';

import Divider from '../../components/Divider';
import MenuHeader from '../../components/MenuHeader';
import MenuItem from '../../components/MenuItem';

import styles, { colors } from './styles';


export default class Menu extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <MenuHeader
          avatar={require('../../assets/img/avatar.png')}
          name="Janet Valdez"
          email="janet@invisionapp.com"
        />
        <Divider color={colors.primary} />
        <View style={styles.list}>
          <MenuItem active icon="home" title="Home" />
          <MenuItem icon="calendar" title="Calendar" />
          <MenuItem icon="stats" title="Overview" />
          <MenuItem icon="time" title="Timeline" />
          <MenuItem icon="contact" title="Profile" />
        </View>
        <Divider color={colors.primary} />
        <View style={styles.list}>
          <MenuItem icon="settings" title="Settings" />
          <MenuItem icon="log-out" title="Logout" />
        </View>
      </View>
    );
  }
}
