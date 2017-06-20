import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

import Day from './Day';

import getStyle from './styles';


export default class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.style = getStyle(props.theme);

    let currentDate;
    if (props.current) {
      currentDate = moment(props.current);
    } else {
      currentDate = moment();
    }
    this.state = {
      currentDate: currentDate.format('YYYY-MM-DD')
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.current !== this.state.currentDate) {
      this.setState({ currentDate: nextProps.current });
    }
  }

  onPressDay = day => (e) => {
    this.props.onDayPress(day, e);
  };

  getDays = () => {
    const { currentDate } = this.state;
    const days = [];
    const startDate = moment(currentDate).startOf('month').isoWeekday(0).format('YYYY-MM-DD');
    const endDate = moment(currentDate).endOf('month').isoWeekday(6).format('YYYY-MM-DD');
    for (const d = moment(startDate); d.isSameOrBefore(endDate); d.add(1, 'days')) {
      days.push(d.format('YYYY-MM-DD'));
    }
    return days;
  };

  renderDay = (day, id) => {
    const { minDate, maxDate, selected, markedDates, theme } = this.props;
    let state = '';
    if (moment(day).isSame(selected)) {
      state = 'selected';
    } else if (
      (minDate && moment(day).isSameOrBefore(minDate))
      ||
      (maxDate && moment(day).isSameOrAfter(maxDate))
    ) {
      state = 'disabled';
    } else if (markedDates[day] && markedDates[day].disabled) {
      state = 'disabled';
    } else if (moment().isSame(day, 'day')) {
      state = 'today';
    }
    return (
      <Day
        key={id}
        state={state}
        theme={theme}
        onPress={this.onPressDay(day)}
        marked={markedDates[day]}
        day={moment(day).format('D')}
      />
    );
  };

  renderWeek = (days, id) => {
    const week = [];
    days.forEach((day, idx) => {
      week.push(this.renderDay(day, idx));
    }, this);
    return (<View style={this.style.week} key={id}>{week}</View>);
  };

  render() {
    const { hideHeader } = this.props;
    const days = this.getDays();
    const weeks = [];
    while (days.length) {
      weeks.push(this.renderWeek(days.splice(0, 7), weeks.length));
    }
    const weekDays = moment.weekdaysShort();
    return (
      <View style={this.style.container}>
        {!hideHeader && <View />}
        <View style={this.style.weekDaysContainer}>
          {weekDays.map((day, idx) => <Text key={day} style={this.style.dayHeader}>{day}</Text>)}
        </View>
        {weeks}
      </View>
    );
  }
}

Calendar.defaultProps = {
  theme: {},
  markedDates: {},
  selected: undefined,
  current: undefined,
  minDate: undefined,
  maxDate: undefined,
  markingType: 'simple',
  hideArrows: false,
  hideHeader: false,
  onDayPress: undefined,
  onMonthChange: undefined,
  renderArrow: undefined,
  monthFormat: 'MMMM YYYY'
};

Calendar.propTypes = {
  theme: PropTypes.object,
  markedDates: PropTypes.object,
  selected: PropTypes.any,
  current: PropTypes.any,
  minDate: PropTypes.any,
  maxDate: PropTypes.any,
  markingType: PropTypes.string,
  hideArrows: PropTypes.bool,
  hideHeader: PropTypes.bool,
  onDayPress: PropTypes.func,
  onMonthChange: PropTypes.func,
  renderArrow: PropTypes.func,
  monthFormat: PropTypes.string
};
