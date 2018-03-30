import React from 'react';
import Toast from 'react-native-root-toast';

const AlertToast = ({ visible, message }) => {
  return (
    <Toast
      visible={visible}
      position={-60}
      shadow={true}
      animation={true}
      hideOnPress={true}>
      { message }
    </Toast>
  )
}

export default AlertToast;
