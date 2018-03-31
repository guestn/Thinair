import React from 'react';
import {
  AsyncStorage,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser, Geolocation } from 'expo';

import Altitude from '../components/Altitude';
import ProgressBar from '../components/ProgressBar';
import SettingsModal from '../components/SettingsModal';
import AlertToast from '../components/Toast';
import PTRView from 'react-native-pull-to-refresh';


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
      toastVisible: false,
      high: 900,
      low: 20,
      altitude: 250,
    }
  }

  componentDidMount() {
    this.loadLocalSettings()
  }

  refresh = () => {

    this.setState({
      refresh: true,
    })
    return new Promise((resolve) => {
      setTimeout(()=>{resolve()}, 2000)
    });
  }

  setParams = ({high, low}) => {
    this.setState({
      high,
      low,
      modalVisible: false,
    })
    this.saveLocalSettings(this.state) 
  }

  viewModal = () => {
    this.setState(prevState => {
      return {
        modalVisible: !prevState.modalVisible,
      }
    })
  }

  viewToast = (message) => {
    setTimeout(() => {
      this.setState({
        toastVisible: true,
        toastMessage: message,
      })
    }, 500);
    setTimeout(() => {
      this.setState({
        toastVisible: false
      })
    }, 4500);
  }

  async saveLocalSettings(data) {
    try {
      await AsyncStorage.setItem('@ThinAirStore:data', JSON.stringify(this.state))
      console.log('SAVED!')
      this.viewToast('saved successfully');
    } catch (error) {
      this.viewToast('Error saving data')
      console.log('Error saving data', error)
    }
  }

  async loadLocalSettings() {
    try {
      let settings = await AsyncStorage.getItem('@ThinAirStore:data');
      settings = JSON.parse(settings)
      this.setState({ ...settings, modalVisible: false, toastVisible: false });
      this.viewToast('loaded successfully');
    } catch (error) {
      this.viewToast('Error loading data')
      console.log('Error loading data', error)
    }
  }

  render() {
    return (
      <ImageBackground
        source={require('../assets/images/background.jpg')}
        style={s.bgImageContainer}>
        <PTRView onRefresh={this.refresh}>
        <View style={s.container} contentContainerStyle={s.contentContainer}>

          <SettingsModal 
            visible={this.state.modalVisible}
            high={this.state.high}
            low={this.state.low}
            params={this.setParams}/>

          <AlertToast
            message={this.state.toastMessage}
            visible={this.state.toastVisible} />

          <View style={s.logoContainer}>
            <Image
              source={require('../assets/images/logo256.png')}
              style={s.logoImage}
            />
          </View>

          <View style={s.verticalSplitContainer}>
            <View style={s.leftSideContainer}>

              <ProgressBar 
                high={this.state.high} 
                low={this.state.low} 
                value={this.state.altitude} />

            </View>
            <View style={s.rightSideContainer}>

              <Altitude refresh={this.state.refresh}/>

              <BigButton
                onPress={this.refresh}
                text="Refresh"/>

              <BigButton
                onPress={this.viewModal}
                text="Settings"/>

            </View>
          </View>
        </View>
        </PTRView>
      </ImageBackground>
    );
  }
}