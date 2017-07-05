import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Image, TouchableOpacity } from 'react-native';

import Button from '../../components/Button';
import Label from '../../components/Label';

import * as authActions from '../../actions/auth';

import NavigationActions from '../../Navigation';

import styles from './styles';


@connect(
  null,
  dispatch => bindActionCreators({
    ...authActions,
  }, dispatch)
)
export default class Login extends React.Component {
  static propTypes = {
    authWithFacebook: PropTypes.func.isRequired,
    authWithGoogle: PropTypes.func.isRequired,
    authSkip: PropTypes.func.isRequired,
    navigator: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    NavigationActions.setNavigator(props.navigator);
    props.navigator.setDrawerEnabled({
      side: 'left',
      enabled: false
    });
  }

  onFacebookLogin = () => {
    this.props.authWithFacebook();
  };

  onGoogleLogin = () => {
    this.props.authWithGoogle();
  };

  onSkipLogin = () => {
    this.props.authSkip();
  };

  render() {
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
