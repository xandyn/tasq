import React from 'react';
import { ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import TodayInfo from '../../components/TodayInfo';
import Tasks from '../../components/Tasks';
import CreateButton from '../../components/CreateButton';

import { getAllTasks } from '../../selectors/tasks';

import NavigationActions from '../../Navigation';

import styles from './styles';


@connect(
  ({ tasks }) => ({
    tasks: getAllTasks({ tasks }),
  }),
  null
)
export default class Home extends React.Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    tasks: PropTypes.array.isRequired,
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
    const { tasks } = this.props;
    const todayTasks = tasks.filter(t => moment().isSame(t.date, 'day'));
    const todoTasks = todayTasks.filter(t => t.status === 'todo');
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <TodayInfo
            tasksTodo={todoTasks.length}
            tasksTotal={todayTasks.length}
          />
          <Tasks tasks={todayTasks} />
        </ScrollView>
        <CreateButton onPress={this.onCreateTask} />
      </View>
    );
  }
}
