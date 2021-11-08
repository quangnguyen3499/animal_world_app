import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ButtonCircle} from '@shared-view';
import AsyncStorage from '@react-native-community/async-storage';
import {DEFAULT_AVATAR} from '@assets';
import storage from '@react-native-firebase/storage';
import { FireBaseService } from '@core';

interface State {
  username?: any;
  avatar?: any;
  user_id?: any;
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
      avatar: '',
      username: ''
    }
  }

  componentDidMount() {
    // AsyncStorage.getItem('user_data');
  };

  handleLogout = () => {
    const {doLogout, isLogout, navigation} = this.props;
    doLogout();
    // isLogout ? navigation.navigate('Login') : null;
  };

  render() {
    let {avatar, user_id} = this.state;
    const {navigation} = this.props;
    avatar = FireBaseService.getStorage(`user/1.jpeg`);

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.auth}>Hi Quang!
            {/* Hi, {username ? username.replace(/['"]+/g, '') : ''}! */}
          </Text>
          {/* <Image source={avatar ? {uri: avatar} : DEFAULT_AVATAR} style={{
              height: 60,
              width: 60,
              borderRadius: 30,
            }}
          /> */}
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
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
