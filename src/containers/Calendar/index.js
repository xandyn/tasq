import React from 'react';
import { ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Calendar as CalendarView } from 'react-native-calendars';
import moment from 'moment';

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
export default class Calendar extends React.Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    tasks: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);

    const current = moment();
    const selected = moment();
    this.state = {
      current: current.format('YYYY-MM-DD'),
      selected: selected.format('YYYY-MM-DD'),
    };

    props.navigator.setTitle({ title: current.format('MMMM YYYY') });
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
      case 'prevMonth': {
        const current = moment(this.state.current).subtract(1, 'month').startOf('month');
        this.changeMonth(current);
        break;
      }
      case 'nextMonth': {
        const current = moment(this.state.current).add(1, 'month').startOf('month');
        this.changeMonth(current);
        break;
      }
      default:
        break;
    }
  };

  onDayPress = ({ dateString }) => {
    this.setState({ selected: dateString });
    this.props.navigator.setTitle({
      title: moment(dateString).format('MMMM YYYY')
    });
  };

  onCreateTask = () => {
    this.props.navigator.push({
      screen: 'tasq.NewTaskScreen',
      animationType: 'fade'
    });
  };

  changeMonth = (date) => {
    this.setState({
      current: date.format('YYYY-MM-DD'),
      selected: date.format('YYYY-MM-DD')
    });
    this.props.navigator.setTitle({
      title: date.format('MMMM YYYY')
    });
  };

  render() {
    const { current, selected } = this.state;
    const { tasks } = this.props;

    const tasksForSelectedDate = tasks.filter(t => moment(selected).isSame(t.date, 'day'));
    const markedDates = {};
    tasks.map(t => markedDates[moment(t.date).format('YYYY-MM-DD')] = { marked: true });

    const calendarTheme = {
      calendarContainerStyle: { marginVertical: 5 },
      dayTextStyle: { fontFamily: 'Avenir-Book' },
      weekDaysStyle: { fontFamily: 'Avenir-Book' },
    };
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <CalendarView
            hideHeader
            current={current}
            selected={[selected]}
            markedDates={markedDates}
            onDayPress={this.onDayPress}
            theme={calendarTheme}
          />
          <Tasks showEdgeDividers tasks={tasksForSelectedDate} />
        </ScrollView>
        <CreateButton onPress={this.onCreateTask} />
      </View>
    );
  }
}
