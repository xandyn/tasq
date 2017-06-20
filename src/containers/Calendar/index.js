import React from 'react';
import { ScrollView } from 'react-native';
import moment from 'moment';

import Button from '../../components/Button';
import CalendarView from '../../components/Calendar';

import styles from './styles';


export default class Calendar extends React.Component {

  state = {
    current: moment().format('YYYY-MM-DD'),
    selected: moment().format('YYYY-MM-DD')
  };

  onPress = () => {
    this.setState({ current: '2017-07-01' });
  };

  onDayPress = (day) => {
    this.setState({ selected: day });
  };

  render() {
    const tasks = [{
      id: 1,
      date: '2017-06-26T12:38:37',
      text: 'Brian\'s birthday',
      status: 'completed',
    }, {
      id: 2,
      date: '2017-06-26T12:38:37',
      text: 'Brian\'s birthday',
      status: 'completed',
    }, {
      id: 3,
      date: '2017-06-26T12:38:37',
      text: 'Brian\'s birthday',
      status: 'snoozed',
    }, {
      id: 4,
      date: '2017-06-26T12:38:37',
      text: 'Brian\'s birthday',
      status: 'overdue',
    }];
    const calendarTheme = {
      dayTextStyle: { fontFamily: 'Avenir-Book' },
      weekDaysStyle: { fontFamily: 'Avenir-Book' },
    };
    return (
      <ScrollView
        style={styles.container}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <CalendarView
          current={this.state.current}
          selected={this.state.selected}
          markedDates={{
            '2017-06-16': { marked: true },
            '2017-06-17': { marked: true },
            '2017-06-18': { disabled: true }
          }}
          onDayPress={this.onDayPress}
          theme={calendarTheme}
        />
        <Button title="To July" onPress={this.onPress} />
      </ScrollView>
    );
  }
}
