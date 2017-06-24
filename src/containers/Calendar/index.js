import React from 'react';
import { ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';
import { Calendar as CalendarView } from 'react-native-calendars';
import moment from 'moment';

import Tasks from '../../components/Tasks';
import CreateButton from '../../components/CreateButton';

import NavigationActions from '../../Navigation';

import styles from './styles';


export default class Calendar extends React.Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
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
      calendarContainerStyle: { marginVertical: 5 },
      dayTextStyle: { fontFamily: 'Avenir-Book' },
      weekDaysStyle: { fontFamily: 'Avenir-Book' },
    };
    const { current, selected } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <CalendarView
            hideHeader
            current={current}
            selected={[selected]}
            markedDates={{
              '2017-06-16': { marked: true },
              '2017-06-17': { marked: true },
              '2017-06-18': { disabled: true }
            }}
            onDayPress={this.onDayPress}
            theme={calendarTheme}
          />
          <Tasks showEdgeDividers tasks={tasks} />
        </ScrollView>
        <CreateButton onPress={this.onCreateTask} />
      </View>
    );
  }
}
