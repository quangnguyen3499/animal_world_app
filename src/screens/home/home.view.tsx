import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ButtonCircle} from '@shared-view';
import AsyncStorage from '@react-native-community/async-storage';
import {DEFAULT_AVATAR} from '@assets';
import {User} from '@core';

interface State {
  user_data: User;
}

interface Props {
  navigation?: any;
  isLoading: boolean;
  isLogout: boolean;
  username: String;
  avatarNew?: String;
  doLogout: () => void;
}

export class HomeComponent extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      user_data: {
        id: '',
        user_token: {},
        username: '',
        avatar: ''
      }
    }
  }

  componentDidMount() {
    AsyncStorage.getItem('user_data').then((val: any) => {
      this.setState({user_data: JSON.parse(val)});
    });    
  };

  handleLogout = () => {
    const {isLogout, navigation, doLogout} = this.props;
    doLogout();
    isLogout ? navigation.navigate('Login') : null;
  };

  render() {
    const {user_data} = this.state;
    const {navigation, username, avatarNew} = this.props;
    let avatar = avatarNew || user_data.avatar;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.auth}>
            Hi, {username || user_data.username}!
          </Text>
          <Image source={avatar ? {uri: avatar} : DEFAULT_AVATAR} style={{
              height: 60,
              width: 60,
              borderRadius: 30,
            }}
          />
        </View>
        <ButtonCircle
          onPress={() => navigation.navigate('Account')}
          name={'user-circle-o'}
          style={styles.accBtn}
          // size={50}
        />
        <ButtonCircle
          onPress={() => navigation.navigate('ListPlace')}
          name={'th-list'}
          style={styles.listBtn}
          // size={200}
        />
        <ButtonCircle
          onPress={() => this.handleLogout()}
          name={'sign-out'}
          style={styles.logoutBtn}
          // size={50}
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
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  auth: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  listBtn: {
    backgroundColor: 'blue',
    justifyContent: 'center',
  },
  accBtn: {
    backgroundColor: 'orange',
  },
  logoutBtn: {
    backgroundColor: 'gray',
    margin: 20,
  },
});
