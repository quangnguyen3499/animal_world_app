import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ButtonCircle, scale, verticalScale} from '@shared-view';
import AsyncStorage from '@react-native-community/async-storage';

interface State {
  username?: string;
}

interface Props {
  navigation?: any;
  isLoading: boolean;
  isLogout: boolean;
  doLogout: () => void;
}

export class HomeComponent extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: '',
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('username', (_err, res) => {
      this.setState({username: res});
    });
  }

  handleLogout = () => {
    const {doLogout, isLogout, navigation} = this.props;
    doLogout();
    isLogout ? navigation.navigate('Login') : null;
  };

  render() {
    const {username} = this.state;
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.auth}>Hi, {username.replace(/['"]+/g, '')}!</Text>
          <ButtonCircle
            name={'user-circle-o'}
            style={{backgroundColor: 'red'}}
          />
        </View>
        <ButtonCircle
          onPress={() => navigation.navigate('List')}
          name={'th-list'}
          style={{backgroundColor: 'blue'}}
        />
        <ButtonCircle
          onPress={() => this.handleLogout()}
          name={'sign-out'}
          style={{backgroundColor: 'blue'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 80,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  auth: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#DA70D6',
    height: verticalScale(48),
    borderRadius: scale(6),
    fontSize: verticalScale(20),
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: verticalScale(20),
    textAlign: 'center',
  },
});
