import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container } from 'native-base';
import { ICON_LOGO_APP } from '@assets';

interface Props {
  navigation?: any;
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
    const {navigation} = this.props;
    const isLoggedIn = !!JSON.stringify(navigation.getParam('isLoggedIn'));
    const data = await this.performTimeConsumingTask();
    if (data !== null) {
      this.props.navigation.navigate(isLoggedIn ? 'Home' : 'Register');
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <View style={styles.content}>
          <Image
            style={styles.image}
            source={ICON_LOGO_APP}
            resizeMode={'contain'}
          />
          <Text style={styles.text}>Welcome to Indoor Map!</Text>
        </View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
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
