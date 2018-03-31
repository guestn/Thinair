import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SText } from '../components/StyledText';

import s from '../constants/styles';

const containerHeight = 400;

const getBarHeight = ({high, low, value}) => {
  const percentage = parseInt(value/(high - low) * 100);
  const barHeight = containerHeight * value/(high - low);
  return { barHeight, percentage };
}

const ProgressBar = ({high, low, value}) => {
  const { barHeight, percentage } = getBarHeight({high, low, value});
  return (
    <View style={{ flexDirection: 'row'}}>
      <View style={[s.progressBarContainer, s.softShadow, { height:containerHeight }]}>
        <View style={[s.progressBar, { height:barHeight }]}></View>
      </View>
      <View style={{ justifyContent: 'space-between', paddingLeft: 10}}>
        <SText style={s.mediumText}>{ high }</SText>
        <SText style={s.mediumText}>{ low }</SText>
        <SText style={{ position:'absolute', bottom: barHeight -20, left: 10}}>
          { `${percentage}%` }
        </SText>
      </View>
    </View>
  )
}

export default ProgressBar;
