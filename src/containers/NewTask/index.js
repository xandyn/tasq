import React from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

import GradientBackground from '../../components/GradientBackground';
import Label from '../../components/Label';
import Divider from '../../components/Divider';

import * as tasksActions from '../../actions/tasks';

import NavigationActions from '../../Navigation';

import styles from './styles';


@connect(
  null,
  dispatch => bindActionCreators({
    ...tasksActions,
  }, dispatch)
)
export default class NewTask extends React.Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    createTask: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      datePickerVisible: false,
      timePickerVisible: false,
      description: '',
      date: '',
    };

    props.navigator.setTitle({ title: 'Add New' });
    props.navigator.setStyle({
      navBarTextFontFamily: 'Avenir-Book',
      navBarTitleTextCentered: true,
    });

    NavigationActions.setNavigator(props.navigator);
    props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = (event) => {
    switch (event.id) {
      case 'close':
        this.props.navigator.pop({ animationType: 'fade' });
        break;
      case 'save':
        this.saveTask();
        break;
      default:
        break;
    }
  };

  saveTask = () => {
    const { description, date } = this.state;
    this.props.createTask({ description, date });
  };

  handlePicker = type => (date) => {
    const newDate = moment(date);
    if (type === 'date' && !this.state.date) {
      newDate.add(1, 'hour');
    }
    this.setState({
      date: newDate.format(),
      [`${type}PickerVisible`]: false,
    });
  };

  showPicker = type => () => {
    this.setState({
      [`${type}PickerVisible`]: true,
    });
  };

  hidePicker = type => () => {
    this.setState({
      [`${type}PickerVisible`]: false,
    });
  };

  render() {
    const { datePickerVisible, timePickerVisible, description, date, } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <GradientBackground style={styles.description}>
            <TextInput
              style={styles.descriptionInput}
              value={description}
              onChangeText={v => this.setState({ description: v })}
              placeholder="New Task"
              placeholderTextColor="rgba(255,255,255,0.5)"
              underlineColorAndroid="transparent"
              selectionColor="white"
              autoCorrect={false}
              autoCapitalize="none"
            />
            <Label style={styles.descriptionLabel} upperCase text="description" />
          </GradientBackground>

          <View style={styles.formGroup}>
            <Icon
              style={styles.icon}
              name="ios-calendar-outline"
              size={30}
              color="white"
            />
            <View style={styles.inputGroup}>
              <Label style={styles.label} upperCase text="date" />
              {date ? (
                <TouchableOpacity onPress={this.showPicker('date')}>
                  <View style={styles.date}>
                    <Text style={styles.dateText}>{moment(date).format('dddd, D MMM')}</Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={this.showPicker('date')}>
                  <View style={styles.date}>
                    <Text style={[styles.dateText, { opacity: 0.5 }]}>Enter date</Text>
                  </View>
                </TouchableOpacity>
              )}
              <DateTimePicker
                mode="date"
                isVisible={datePickerVisible}
                onConfirm={this.handlePicker('date')}
                onCancel={this.hidePicker('date')}
              />
            </View>
          </View>
          <Divider />

          <View style={styles.formGroup}>
            <Icon
              style={styles.icon}
              name="ios-time-outline"
              size={30}
              color="white"
            />
            <View style={styles.inputGroup}>
              <Label style={styles.label} upperCase text="time" />
              {date ? (
                <TouchableOpacity onPress={this.showPicker('time')}>
                  <View style={styles.date}>
                    <Text style={styles.dateText}>{moment(date).format('LT')}</Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={this.showPicker('time')}>
                  <View style={styles.date}>
                    <Text style={[styles.dateText, { opacity: 0.5 }]}>Enter time</Text>
                  </View>
                </TouchableOpacity>
              )}
              <DateTimePicker
                mode="time"
                isVisible={timePickerVisible}
                onConfirm={this.handlePicker('time')}
                onCancel={this.hidePicker('time')}
              />
            </View>
          </View>
          <Divider />

        </ScrollView>
      </View>
    );
  }
}
