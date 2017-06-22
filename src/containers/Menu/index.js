import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { onlyUpdateForKeys } from 'recompose';

import Divider from '../../components/Divider';
import MenuHeader from '../../components/MenuHeader';
import MenuItem from '../../components/MenuItem';

import * as uiActions from '../../actions/ui';

import styles, { colors } from './styles';


@connect(
  ({ ui }) => ({
    screen: ui.data.screen,
  }),
  dispatch => bindActionCreators({
    ...uiActions,
  }, dispatch)
)
@onlyUpdateForKeys(['screen'])
export default class Menu extends React.Component {
  static propTypes = {
    screen: PropTypes.string.isRequired,
    setScreen: PropTypes.func.isRequired,
  };

  onPressMenu = screen => (e) => {
    this.props.setScreen(screen);
  };

  render() {
    const { screen } = this.props;
    return (
      <View style={styles.container}>
        <MenuHeader
          avatar={require('../../assets/img/avatar.png')}
          name="Janet Valdez"
          email="janet@invisionapp.com"
        />
        <Divider color={colors.primary} />
        <View style={styles.list}>
          <MenuItem
            active={screen === 'HomeScreen'}
            onPress={this.onPressMenu('HomeScreen')}
            icon="home"
            title="Home"
          />
          <MenuItem
            active={screen === 'CalendarScreen'}
            onPress={this.onPressMenu('CalendarScreen')}
            icon="calendar"
            title="Calendar"
          />
          <MenuItem
            active={screen === 'TimelineScreen'}
            onPress={this.onPressMenu('TimelineScreen')}
            icon="time"
            title="Timeline"
          />
          <MenuItem
            active={screen === 'OverviewScreen'}
            onPress={this.onPressMenu('OverviewScreen')}
            icon="stats"
            title="Overview"
          />
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
