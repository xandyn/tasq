import React from 'react';
import { ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';

import MonthNavigator from '../../components/MonthNavigator';
import TotalTasksInfo from '../../components/TotalTasksInfo';

import NavigationActions from '../../Navigation';

import styles from './styles';


export default class Overview extends React.Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {};

    props.navigator.setTitle({ title: 'Overview' });
    props.navigator.setStyle({
      navBarTextFontFamily: 'Avenir-Book',
      navBarTitleTextCentered: true,
    });

    NavigationActions.setNavigator(props.navigator);
    props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = (event) => {
    switch (event.id) {
      case 'menu':
        this.props.navigator.toggleDrawer({ side: 'left' });
        break;
      case 'search':
        break;
      default:
        break;
    }
  };

  render() {
    const tasks = [{
      id: 1,
      date: '2017-06-26T12:00:00',
      text: 'Brian\'s birthday',
      status: 'completed',
    }, {
      id: 2,
      date: '2017-06-27T12:00:00',
      text: 'Brian\'s birthday',
      status: 'completed',
    }, {
      id: 3,
      date: '2017-07-06T12:00:00',
      text: 'Brian\'s birthday',
      status: 'snoozed',
    }, {
      id: 4,
      date: '2017-07-10T12:00:00',
      text: 'Brian\'s birthday',
      status: 'overdue',
    }, {
      id: 5,
      date: '2017-07-10T13:00:00',
      text: 'Brian\'s birthday',
      status: 'overdue',
    }];
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <MonthNavigator
            onMonthChange={() => {}}
            month="January"
            year="2015"
          />
          <TotalTasksInfo
            completed={34}
            snoozed={85}
            overdue={18}
          />
        </ScrollView>
      </View>
    );
  }
}
