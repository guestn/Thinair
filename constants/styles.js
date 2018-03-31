import React from 'react';
import { Platform, StyleSheet } from 'react-native';

const colors = {
  orange: '#FF7900'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImageContainer: {
    backgroundColor: '#ccc',
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  smallText: {

  },
  mediumText: {
    fontFamily: 'fugaz-one',
    fontSize: 20,
  },
  bigText: {
    fontFamily: 'fugaz-one',
    fontSize: 60,
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
    //backgroundColor: '#ddddff',
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
    backgroundColor: colors.orange,
    padding: 20,
    height: 50,
  },
  buttonSmall: {
    backgroundColor: colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
  },
  progressBarContainer: {
    borderRadius: 12,
    width:24,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  progressBar: {
    width:24,
    backgroundColor: colors.orange,
    borderRadius: 12,
   // alignSelf: 'flex-end'
  },
  logoImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  softShadow: {
    shadowColor: '#000',
    shadowRadius: 15,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: -20,
    }

  }
});


export default styles;