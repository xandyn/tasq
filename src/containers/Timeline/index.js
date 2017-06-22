import React from 'react';
import { ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

import Tasks from '../../components/Tasks';
import SortButton from '../../components/SortButton';
import DayDivider from '../../components/DayDivider';

import NavigationActions from '../../Navigation';

import styles from './styles';


export default class Timeline extends React.Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {};

    props.navigator.setTitle({ title: 'Timeline' });
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
    const tasksFlatten = {};
    const allDates = tasks.map(t => moment(t.date).format('YYYY-MM-DD'));
    const dates = [...new Set(allDates)];
    for (const date of dates) {
      tasksFlatten[date] = tasks.filter(t => moment(t.date).isSame(date, 'day'));
    }
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          {dates.map(date => (
            <View key={date}>
              <DayDivider date={moment(date).format('dddd, MMMM D')} />
              <Tasks tasks={tasksFlatten[date]} />
            </View>
          ))}
        </ScrollView>
        <SortButton />
      </View>
    );
  }
}
