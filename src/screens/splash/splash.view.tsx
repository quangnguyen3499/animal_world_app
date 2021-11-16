import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { ICON_LOGO_APP } from '@assets';

interface Props {
  navigation?: any;
  route?: any;
}

export class SplashComponent extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve('success')
      }, 3000)
    )
  }

  async componentDidMount() {    
    const {navigation, route} = this.props;
    const data = await this.performTimeConsumingTask();
    
    if (data !== null) {
      navigation.navigate("Register");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={ICON_LOGO_APP}
          resizeMode={'contain'}
        />
        <Text style={styles.text}>Welcome to Indoor Map!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 300
  },
  text: {
    fontSize: 30,
    color: '#010101'
  }
});
