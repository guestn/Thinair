import React from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from 'react-native';
import { WebBrowser, Geolocation } from 'expo';

import s from '../constants/styles';

export default class SettingsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: props.visible,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({modalVisible: nextProps.visible})
  }
  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  }
  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          alert('Modal has been closed.');
        }}>
        <View style={s.modalContainer}>
          <View>
            <Text>Change your goal settings</Text>
            

          </View>

            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
              style={s.button}>
              <Text>OK</Text>
            </TouchableHighlight>
        </View>
      </Modal>
    );
  }
}
