import React from 'react';
import { View, SectionList } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import TaskItem from '../../components/TaskItem';
import SortButton from '../../components/SortButton';
import DayDivider from '../../components/DayDivider';
import Divider from '../../components/Divider';

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

    this.state = {
      renderWithPast: false,
    };

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

  onRefresh = () => {
    this.setState({ renderWithPast: true });
  };

  renderSections = () => {
    const { renderWithPast } = this.state;
    const { tasks } = this.props;
    const sections = [];
    const today = moment();
    const dates = new Set();
    let tasksData = [];
    if (renderWithPast) {
      tasksData = tasks;
      tasksData.map(t => dates.add(moment(t.date).format('YYYY-MM-DD')));
    } else {
      tasksData = tasks.filter((t) => {
        const date = moment(t.date);
        if (date.isSameOrAfter(today, 'day')) {
          dates.add(date.format('YYYY-MM-DD'));
          return true;
        }
        return false;
      });
    }
    const sortedDates = [...dates].sort();
    for (const date of sortedDates) {
      sections.push({
        date,
        key: date,
        data: tasksData.filter(t => moment(t.date).isSame(date, 'day')),
        renderItem: ({ item }) => (
          <TaskItem key={item.uid} item={item} />
        ),
        ItemSeparatorComponent: () => <Divider />,
      });
    }
    return sections;
  };

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          refreshing={false}
          keyExtractor={item => item.uid}
          onRefresh={this.onRefresh}
          stickySectionHeadersEnabled={false}
          renderSectionHeader={({ section }) => (
            <DayDivider date={moment(section.date).format('dddd, MMMM D')} />
          )}
          sections={this.renderSections()}
        />
        <SortButton />
      </View>
    );
  }
}
