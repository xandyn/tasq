import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as appActions from '../../actions/app';

import NavigationActions from '../../Navigation';


@connect(
  null,
  dispatch => bindActionCreators({
    ...appActions,
  }, dispatch)
)
export default class Boot extends React.Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    appInitialized: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    NavigationActions.setNavigator(props.navigator);
  }

  componentDidMount() {
    this.props.appInitialized();
  }

  render() {
    return (
      <View style={{ backgroundColor: 'white' }} {...this.props} />
    );
  }
}
