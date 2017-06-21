import React from 'react';
import { ScrollView } from 'react-native';
import { Calendar as CalendarView } from 'react-native-calendars';
import moment from 'moment';


import styles from './styles';


export default class Calendar extends React.Component {

  state = {
    current: moment().format('YYYY-MM'),
    selected: moment().format('YYYY-MM-DD'),
  };

  onDayPress = ({ dateString }) => {
    this.setState({ selected: dateString });
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
    const { current, selected } = this.state;
    return (
      <ScrollView
        style={styles.container}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <CalendarView
          hideHeader
          currentMonth={current}
          selected={[selected]}
          markedDates={{
            '2017-06-16': { marked: true },
            '2017-06-17': { marked: true },
            '2017-06-18': { disabled: true }
          }}
          onDayPress={this.onDayPress}
          theme={calendarTheme}
        />
      </ScrollView>
    );
  }
}
