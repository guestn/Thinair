import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  //navigator,
} from 'react-native';
import { Geolocation } from 'expo';
import { SText } from '../components/StyledText';
import s from '../constants/styles';

export default class Altitude extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      altitude: 0,
    }
  }

  componentDidMount() {
    this.getAltitude();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.refresh === true) {
      this.getAltitude()
    }
  }

  getAltitude = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log({position})
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          altitude: position.coords.altitude.toFixed(1),
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  render() {
    return (
      <View style={{flexDirection:'row'}}>
        <SText style={s.bigText}>{ this.state.altitude }</SText>
        <SText style={s.smallText}>m</SText>
      </View>
    )
  }
}
