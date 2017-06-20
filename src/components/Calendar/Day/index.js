import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import getStyle from './styles';


const Day = ({ theme, day, state, marked, onPress }) => {
  this.style = getStyle(theme);

  const containerStyle = [this.style.base];
  const textStyle = [this.style.text];
  const dotStyle = [this.style.dot];

  if (state === 'selected') {
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
};


Day.defaultProps = {
  marked: {}
};

Day.propTypes = {
  day: PropTypes.string.isRequired,
  state: PropTypes.oneOf(['selected', 'disabled', 'today', '']).isRequired,
  theme: PropTypes.object.isRequired,
  marked: PropTypes.any,
  onPress: PropTypes.func.isRequired,
};


export default Day;
