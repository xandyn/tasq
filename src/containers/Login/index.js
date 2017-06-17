import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Divider from '../../components/Divider';
import Button from '../../components/Button';
import Label from '../../components/Label';

import styles from './styles';


export default class Login extends React.Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired
  };

  state = {
    email: '',
    password: '',
  };

  onPressLogin = () => {
    this.props.navigator.resetTo({
      screen: 'tasq.HomeScreen',
      animationType: 'fade'
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../assets/img/logo.png')}
        />
        <View style={styles.credentials}>
          <View style={styles.formControl}>
            <View style={styles.formGroup}>
              <Icon
                style={styles.icon}
                name="ios-mail-outline"
                size={30}
                color="white"
              />
              <View style={styles.inputGroup}>
                <Label upperCase text="email" />
                <TextInput
                  style={styles.input}
                  value={email}
                  onChangeText={v => this.setState({ email: v })}
                  placeholder="Enter email"
                  placeholderTextColor="rgba(255,255,255,0.5)"
                  keyboardType="email-address"
                  underlineColorAndroid="transparent"
                  selectionColor="white"
                  autoCorrect={false}
                  autoCapitalize="none"
                />
              </View>
            </View>
            <Divider />
          </View>
          <View style={styles.formControl}>
            <View style={styles.formGroup}>
              <Icon
                style={styles.icon}
                name="ios-lock-outline"
                size={30}
                color="white"
              />
              <View style={styles.inputGroup}>
                <Label upperCase text="password" />
                <TextInput
                  secureTextEntry
                  style={styles.input}
                  value={password}
                  onChangeText={v => this.setState({ password: v })}
                  placeholder="Enter password"
                  placeholderTextColor="rgba(255,255,255,0.5)"
                  underlineColorAndroid="transparent"
                  selectionColor="white"
                  autoCorrect={false}
                  autoCapitalize="none"
                />
              </View>
            </View>
            <Divider />
          </View>
          <Button title="Sign In" onPress={this.onPressLogin} />
        </View>
      </View>
    );
  }
}
