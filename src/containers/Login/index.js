import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

import Divider from '../../components/Divider';
import Button from '../../components/Button';
import Label from '../../components/Label';

import firebase from '../../Firebase';

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

  onFacebookLogin = () => {
    LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
      (result) => {
        if (result.isCancelled) {
          console.log('Facebook login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then((data) => {
            const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

            firebase.auth().signInWithCredential(credential).then((user) => {
              console.log('user', user);
            }, (error) => {
              console.log('firebase auth error', error);
            });
          }, (error) => {
            console.log('AccessToken error', error);
          });
        }
      },
      (error) => {
        console.log('Error facebook login', error);
      }
    );
  };

  onGoogleLogin = () => {};

  onSkipLogin = () => {};

  render() {
    const { email, password } = this.state;
    const emailField = (
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
    );
    const passwordField = (
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
    );
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../assets/img/logo.png')}
        />
        <View style={styles.credentials}>
          <Button
            style={styles.button}
            title="Login with Facebook"
            icon="logo-facebook"
            onPress={this.onFacebookLogin}
          />
          <Button
            style={styles.button}
            title="Login with Google"
            icon="logo-google"
            onPress={this.onGoogleLogin}
          />
          <TouchableOpacity onPress={this.onSkipLogin}>
            <View style={styles.skipLogin}>
              <Label style={[styles.skipLoginText, { opacity: 0.5 }]} text="DON'T HAVE ACCOUNTS?" />
              <Label style={styles.skipLoginText} text="GO OFFLINE" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
