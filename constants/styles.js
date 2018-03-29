import React from 'react';
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  bigText: {
    fontSize: 30,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  verticalSplitContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
  },
  leftSideContainer: {
    flex:1,
    backgroundColor: '#ddddff',
  },
  rightSideContainer: {
    flex: 3,
    justifyContent: 'space-between',
  },
  modalContainer: {
    flex: 1,
    justifyContent:'space-between',
    margin: 22, 
    backgroundColor: 'rgba(155,155,155,0.9)'
  },
  button: {
    backgroundColor: '#00aaff',
    padding: 20,
    height: 50,
  },
  progressBarContainer: {
    width:24,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  progressBar: {
    width:16,
    backgroundColor: 'red',
   // alignSelf: 'flex-end'
  },
  logoImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  }
});


export default styles;