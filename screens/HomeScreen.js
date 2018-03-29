import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser, Geolocation } from 'expo';

import { MonoText } from '../components/StyledText';
import Altitude from '../components/Altitude';
import ProgressBar from '../components/ProgressBar';
import SettingsModal from '../components/SettingsModal';
import { BigButton } from '../components/Buttons';


import s from '../constants/styles';

// __DEV__ gives true in dev env //

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this.state = {
      refresh: false,
      modalVisible: false,
      high: 900,
      low: 20,
    }
  }

  refresh = () => {
    this.setState({
      refresh: true,
    })
  }

  setParams = ({high, low}) => {
    console.log({high, low})
    this.setState({
      high,
      low,
      modalVisible: false,
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

          <SettingsModal 
            visible={this.state.modalVisible}
            high={this.state.high}
            low={this.state.low}
            params={this.setParams}/>

          <View style={s.logoContainer}>
            <Image
              source={require('../assets/images/robot-prod.png')}
              style={s.logoImage}
            />
          </View>

          <View style={s.verticalSplitContainer}>
            <View style={s.leftSideContainer}>

              <ProgressBar high={this.state.high} low={this.state.low} value={300} />

            </View>
            <View style={s.rightSideContainer}>

              <Text>Your Current Altitude is</Text>

              <Altitude refresh={this.state.refresh}/>

              <BigButton
                onPress={this.refresh}
                text="Refresh"/>

              <BigButton
                onPress={this.viewModal}
                text="Settings"/>

            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}