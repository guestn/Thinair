import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import s from '../constants/styles';

const containerHeight = 400;

const getBarHeight = ({high, low, value}) => {
  const percentage = parseInt(value/(high - low) * 100);
  const barHeight = containerHeight * value/(high - low);
  return { barHeight, percentage };
}

const ProgressBar = ({high, low, value}) => {
  const { barHeight, percentage } = getBarHeight({high, low, value})
  return (
    <View style={{ flexDirection: 'row'}}>
      <View style={[s.progressBarContainer, { height:containerHeight }]}>
        <View style={[s.progressBar, { height:barHeight }]}></View>
      </View>
      <View style={{ justifyContent: 'space-between'}}>
        <Text style={{}}>{ high }</Text>
        <Text>{ low }</Text>
        <Text style={{ position:'absolute', bottom: barHeight}}>{ percentage }%</Text>
      </View>
    </View>
  )
}

export default ProgressBar;
