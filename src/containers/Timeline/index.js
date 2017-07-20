import React from 'react';
import { View, SectionList } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import Tasks from '../../components/Tasks';
import SortButton from '../../components/SortButton';
import DayDivider from '../../components/DayDivider';

import { getAllTasks } from '../../selectors/tasks';

import NavigationActions from '../../Navigation';

import styles from './styles';


@connect(
  ({ tasks }) => ({
    tasks: getAllTasks({ tasks }),
  }),
  null
)
export default class Timeline extends React.Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    tasks: PropTypes.array.isRequired,
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

  componentDidMount() {
    const wait = new Promise(resolve => setTimeout(resolve, 100));
    wait.then(() => {
      this.timeline.scrollToLocation({
        animated: true,
        sectionIndex: 1,
        itemIndex: 0
      });
    });
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
    const { tasks } = this.props;
    const tasksFlatten = {};
    const allDates = tasks.map(t => moment(t.date).format('YYYY-MM-DD'));
    const dates = [...new Set(allDates)].sort();
    for (const date of dates) {
      tasksFlatten[date] = tasks.filter(t => moment(t.date).isSame(date, 'day'));
    }
    const today = moment().format('YYYY-MM-DD');
    const todayIndex = dates.indexOf(today);
    const pastDates = todayIndex > 0 ? dates.slice(0, todayIndex) : [];
    const futureDates = todayIndex > -1 ? dates.slice(todayIndex) : [];
    return (
      <View style={styles.container}>
        <SectionList
          ref={ref => this.timeline = ref}
          keyExtractor={item => item}
          getItemLayout={(sections, index) => ({
            length: 82,
            offset: (pastDates.length * 50) + (82 * index),
            index
          })}
          renderItem={({ item }) => (
            <View key={item}>
              <DayDivider date={moment(item).format('dddd, MMMM D')} />
              <Tasks tasks={tasksFlatten[item]} />
            </View>
          )}
          sections={[
            { data: pastDates, key: 'past' },
            { data: futureDates, key: 'future' },
          ]}
        />
        <SortButton />
      </View>
    );
  }
}
