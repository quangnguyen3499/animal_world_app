import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

interface Props {
  navigation?: any;
}

export class SplashComponent extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  async componentDidMount() {
    const data = await this.navigateToHome();
    if (data !== null) {
      this.props.navigation.navigate('Login');
    }
  }

  navigateToHome = async () => {
    const wait = (time: any) =>
      new Promise(resolve => setTimeout(resolve, time));
    return wait(2000).then(() => this.props.navigation.navigate('Login'));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 25}}>SPLASH SCREEN</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    color: '#313131',
    opacity: 0.8,
    marginVertical: 5,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    color: '#313131',
    marginTop: 20,
  },
  background: {
    flex: 1,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonGetStarted: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    marginTop: 80,
    margin: 35,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
  textGetStarted: {
    fontSize: 16,
    color: '#313131',
  },
});
