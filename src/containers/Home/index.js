import React from 'react';
import { ScrollView, View } from 'react-native';

import TodayInfo from '../../components/TodayInfo';
import Tasks from '../../components/Tasks';
import CreateButton from '../../components/CreateButton';

import styles from './styles';


export default class Home extends React.Component {

  onPress = () => {};

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
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          bounces={false}
          showsVerticalScrollIndicator={false}
        >
          <TodayInfo
            dayOfWeek="Wednesday"
            date="March 18, 2015"
            tasksTodo={6}
            tasksTotal={10}
          />
          <Tasks tasks={tasks} />
        </ScrollView>
        <CreateButton />
      </View>
    );
  }
}
