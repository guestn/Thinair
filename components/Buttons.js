import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

import s from '../constants/styles';

export const SmallButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={s.buttonSmall}>
      <Text>{ text }</Text>
    </TouchableOpacity>
  )
}

export const BigButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity
      style={s.button}
      onPress={this.refresh}>
      <Text>Refresh</Text>
    </TouchableOpacity>

  )
}