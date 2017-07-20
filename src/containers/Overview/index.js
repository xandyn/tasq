import React from 'react';
import { ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import MonthNavigator from '../../components/MonthNavigator';
import TotalTasksInfo from '../../components/TotalTasksInfo';

import { getAllTasks } from '../../selectors/tasks';

import NavigationActions from '../../Navigation';

import styles from './styles';


@connect(
  ({ tasks }) => ({
    tasks: getAllTasks({ tasks }),
  }),
  null
)
export default class Overview extends React.Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    tasks: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      current: moment()
    };

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

  onMonthChange = direction => (e) => {
    this.setState(prevState => ({
      current: direction === 'prev'
        ? moment(prevState.current).subtract(1, 'month')
        : moment(prevState.current).add(1, 'month')
    }));
  };

  render() {
    const { current } = this.state;
    const { tasks } = this.props;
    const tasksForCurrentMonth = tasks.filter(t => moment(current).isSame(t.date, 'month'));
    const totalInfo = { completed: 0, snoozed: 0, overdue: 0 };
    tasksForCurrentMonth.map(t => totalInfo[t.status]++);
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <MonthNavigator
            onMonthChange={this.onMonthChange}
            month={current.format('MMMM')}
            year={current.format('YYYY')}
          />
          <TotalTasksInfo
            completed={totalInfo.completed}
            snoozed={totalInfo.snoozed}
            overdue={totalInfo.overdue}
            total={tasksForCurrentMonth.length}
          />
        </ScrollView>
      </View>
    );
  }
}
