import React from 'react';
import { ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';

import TodayInfo from '../../components/TodayInfo';
import Tasks from '../../components/Tasks';
import CreateButton from '../../components/CreateButton';

import NavigationActions from '../../Navigation';

import styles from './styles';


export default class Home extends React.Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    NavigationActions.setNavigator(props.navigator);
    props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    props.navigator.setDrawerEnabled({
      side: 'left',
      enabled: true
    });
  }

  onNavigatorEvent = (event) => {
    switch (event.id) {
      case 'menu':
        this.props.navigator.toggleDrawer({ side: 'left' });
        break;
      default:
        break;
    }
  };

  onCreateTask = () => {
    this.props.navigator.push({
      screen: 'tasq.NewTaskScreen',
      animationType: 'fade'
    });
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
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <TodayInfo
            dayOfWeek="Wednesday"
            date="March 18, 2015"
            tasksTodo={6}
            tasksTotal={10}
          />
          <Tasks tasks={tasks} />
        </ScrollView>
        <CreateButton onPress={this.onCreateTask} />
      </View>
    );
  }
}
