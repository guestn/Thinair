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

import s from '../constants/styles';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this.state = {
      refresh: false,
    }
  }

  refresh = () => {
    this.setState({
      refresh: true,
    })
  }


  render() {
    return (
      <View style={s.container}>
        <ScrollView style={s.container} contentContainerStyle={s.contentContainer}>
          <View style={s.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={s.welcomeImage}
            />
          </View>
          <View>
            <Text>Your Altitude is 100m</Text>
          </View>
          <Altitude refresh={this.state.refresh}/>
          <TouchableOpacity
            style={s.button}
            onPress={this.refresh}
          >
            <Text>Refresh</Text>
          </TouchableOpacity>


         
        </ScrollView>

        
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={s.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={s.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }
}