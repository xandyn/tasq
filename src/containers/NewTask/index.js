import React from 'react';
import { ScrollView, View, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

import GradientBackground from '../../components/GradientBackground';
import Label from '../../components/Label';
import Divider from '../../components/Divider';

import NavigationActions from '../../Navigation';

import styles from './styles';


export default class NewTask extends React.Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      description: '',
      date: '',
      time: '',
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
        break;
      default:
        break;
    }
  };

  render() {
    const { description, date, time } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <GradientBackground style={styles.description}>
            <TextInput
              style={styles.descriptionInput}
              value={description}
              onChangeText={v => this.setState({ description: v })}
              placeholder="New Event"
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
              <TextInput
                style={styles.input}
                value={date}
                onChangeText={v => this.setState({ date: v })}
                placeholder="Enter date"
                placeholderTextColor="rgba(255,255,255,0.5)"
                underlineColorAndroid="transparent"
                selectionColor="white"
                autoCorrect={false}
                autoCapitalize="none"
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
              <TextInput
                style={styles.input}
                value={time}
                onChangeText={v => this.setState({ time: v })}
                placeholder="Enter time"
                placeholderTextColor="rgba(255,255,255,0.5)"
                underlineColorAndroid="transparent"
                selectionColor="white"
                autoCorrect={false}
                autoCapitalize="none"
              />
            </View>
          </View>
          <Divider />

        </ScrollView>
      </View>
    );
  }
}
