import React, { Component } from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { BACKGROUND_SPLASH, LOGO_APP } from '@assets';
import AsyncStorage from '@react-native-community/async-storage';
import { NormalButton } from '@shared-view';

interface Props {
  navigation?: any;
  route?: any;
}

export class SplashComponent extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  backToAuth = () => {
    const {navigation} = this.props;    
    AsyncStorage.getItem('user_data').then((val: any) => {
      (JSON.parse(val)?.token) ? navigation.navigate('Home') : null;
    });
  }
  
  render() {
    const {navigation} = this.props;
    this.backToAuth();

    return (
      <ImageBackground
        style={styles.image}
        source={BACKGROUND_SPLASH}
      >
        <Image 
          source={LOGO_APP}
          style={styles.logo}
        />
        <Text style={styles.logoName}>Indoor Map</Text>
        <NormalButton 
          name={"Let's Start"}
          onPress={() => navigation.navigate('Register')}
          width={'verylarge'}
          style={styles.buttonStart}
        />
        <Text style={styles.continueText}>Click to continue</Text>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1
  },
  buttonStart: {
    backgroundColor: '#00CEC9', 
    borderRadius: 20,
    marginTop: 340,
    alignSelf: 'center'
  },
  logo: {
    alignSelf: 'center',
    marginTop: 70
  },
  logoName: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  continueText: {
    alignSelf: 'center'
  }
});
