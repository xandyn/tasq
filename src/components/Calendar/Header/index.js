import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import getStyle from './styles';


export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.style = getStyle(props.theme);
  }

  render() {
    const { day, state, marked, onPress } = this.props;

    const containerStyle = [this.style.base];
    const textStyle = [this.style.text];
    const dotStyle = [this.style.dot];

    if (state === 'selected' || marked.selected) {
      containerStyle.push(this.style.selected);
      textStyle.push(this.style.selectedText);
    } else if (state === 'disabled' || marked.disabled) {
      textStyle.push(this.style.disabledText);
    } else if (state === 'today') {
      textStyle.push(this.style.todayText);
    }
    return (
      <TouchableOpacity style={containerStyle} onPress={onPress}>
        <Text style={textStyle}>{day}</Text>
        {marked.marked && <View style={dotStyle} />}
      </TouchableOpacity>
    );
  }
}


Header.defaultProps = {
  marked: {}
};

Header.propTypes = {
  day: PropTypes.string.isRequired,
  state: PropTypes.oneOf(['selected', 'disabled', 'today', '']).isRequired,
  theme: PropTypes.object.isRequired,
  marked: PropTypes.any,
  onPress: PropTypes.func.isRequired,
};
