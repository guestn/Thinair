import React from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser, Geolocation } from 'expo';
import { BigButton, SmallButton } from '../components/Buttons';

import s from '../constants/styles';

export default class SettingsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: props.visible,
      highValue: props.high,
      lowValue: props.low,
    }
   // this.props.params
  }

  componentWillReceiveProps(nextProps) {
    this.setState({modalVisible: nextProps.visible})
  }

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  }

  changeHigh = (dir) => {
    console.log(dir)
    let highValue = this.state.highValue;
    if  (dir === 'incr') {
      highValue++;
    } else {
      if (highValue > 0) highValue--;
    }
    this.setState({ highValue });
  }

  changeLow = (dir) => {
    let lowValue = this.state.lowValue;
    if  (dir === 'incr') {
      lowValue++;
    } else {
      if (lowValue > 0) lowValue--;
    }
    this.setState({ lowValue });
  }

  closeModal = () => {
    //this.setModalVisible(!this.state.modalVisible);
    this.setState({
        modalVisible: false
      },
      this.props.params({ 
        high: this.state.highValue, 
        low: this.state.lowValue
      })
    );    
  }


  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {}}>

        <View style={s.modalContainer}>
          <View>
            <Text>Change your goal settings</Text>

            <Text>High Goal</Text>

            <SmallButton
              onPress={this.changeHigh.bind(this, 'incr')}
              text="+"/>
            <SmallButton
              onPress={this.changeHigh.bind(this, 'decr')}
              text="-"/>
            <Text>{ this.state.highValue }</Text>

            <Text>Start Value</Text>

            <SmallButton
              onPress={this.changeLow.bind(this, 'incr')}
              text="+"/>
            <SmallButton
              onPress={this.changeLow.bind(this, 'decr')}
              text="-"/>
            <Text>{ this.state.lowValue }</Text>
          </View>

          <BigButton
            onPress={this.closeModal}
            text="OK"/>
        </View>

      </Modal>
    );
  }
}
