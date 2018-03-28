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
import s from '../constants/styles';

export default class Altitude extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      altitude: null,
    }
  }

  componentDidMount() {
    this.getAltitude()
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
          altitude: position.coords.altitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  render() {
    return (
      <View>
        <Text style={s.bigText}>{ this.state.altitude } m { this.state.latitude }</Text>
      </View>
    )
  }
}
