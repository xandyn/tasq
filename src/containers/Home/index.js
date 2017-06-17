import React from 'react';
import { View } from 'react-native';

import Button from '../../components/Button';
import styles from './styles';


export default class Home extends React.Component {

  onPress = () => {};

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Press me"
          onPress={this.onPress}
        />
      </View>
    );
  }
}
