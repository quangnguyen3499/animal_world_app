import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {NormalButton} from '@shared-view';
import AsyncStorage from '@react-native-community/async-storage';
import {DEFAULT_AVATAR} from '@assets';
import {User} from '@core';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
    this.backToAuth();
    AsyncStorage.getItem('user_data').then((val: any) => {
      this.setState({user_data: JSON.parse(val)});
    });
  };

  handleLogout = () => {
    const {doLogout} = this.props;
    doLogout();
  };

  backToAuth = () => {
    const {navigation} = this.props;
    AsyncStorage.getItem('user_data').then((val: any) => {                  
      !JSON.parse(val).token ? navigation.navigate('Login') : null;
    });
  }

  render() {
    this.backToAuth();
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
        <View style={styles.listBtn}>
          <NormalButton 
            name={"Account"}
            onPress={() => navigation.navigate('Account')}
            width={'normal'}
          />
          <NormalButton 
            name={"List Place"}
            onPress={() => navigation.navigate('ListPlace')}
            width={'normal'}
          />
        </View>
        <NormalButton 
          name={"Log Out"}
          onPress={() => this.handleLogout()}
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
    flexDirection: 'row',
    justifyContent: 'center'
  },
});
