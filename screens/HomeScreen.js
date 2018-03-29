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
import { WebBrowser, Geolocation } from 'expo';

import { MonoText } from '../components/StyledText';
import Altitude from '../components/Altitude';
import ProgressBar from '../components/ProgressBar';
import SettingsModal from '../components/SettingsModal';


import s from '../constants/styles';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this.state = {
      refresh: false,
      modalVisible: false,
    }
  }

  refresh = () => {
    this.setState({
      refresh: true,
    })
  }

  viewModal = () => {
    this.setState(prevState => {
      return {
        modalVisible: !prevState.modalVisible,
      }
    })
  }

  render() {
    return (
      <View style={s.container}>
        <ScrollView style={s.container} contentContainerStyle={s.contentContainer}>
          <SettingsModal visible={this.state.modalVisible}/>
          <View style={s.logoContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={s.logoImage}
            />
          </View>

          <View style={s.verticalSplitContainer}>
            <View style={s.leftSideContainer}>
              <ProgressBar high={2100} low={0} value={1000} />
            </View>
            <View style={s.rightSideContainer}>

              <View>
                <Text>Your Current Altitude is</Text>
              </View>

              <Altitude refresh={this.state.refresh}/>

              <TouchableOpacity
                style={s.button}
                onPress={this.refresh}>
                <Text>Refresh</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={s.button}
                onPress={this.viewModal}>
                <Text>Settings</Text>
              </TouchableOpacity>

            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}