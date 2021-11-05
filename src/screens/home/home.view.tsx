import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ButtonCircle} from '@shared-view';
import AsyncStorage from '@react-native-community/async-storage';
import {DEFAULT_AVATAR} from '@assets';

interface State {
  username?: string;
  avatar?: String;
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
  }

  componentDidMount() {
    AsyncStorage.getItem('username', (_err, res) => {
      this.setState({username: res});
    });
    AsyncStorage.getItem('avatar', (_err, res) => {
      this.setState({avatar: res});
    });
  }

  handleLogout = () => {
    const {doLogout, isLogout, navigation} = this.props;
    doLogout();
    isLogout ? navigation.navigate('Login') : null;
  };

  render() {
    const {username, avatar} = this.state;
    const {navigation} = this.props;

    console.log(avatar);

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.auth}>
            Hi, {username ? username.replace(/['"]+/g, '') : ''}!
          </Text>
          <Image source={avatar ? DEFAULT_AVATAR : avatar} />
        </View>
        <ButtonCircle
          onPress={() => navigation.navigate('Account')}
          name={'user-circle-o'}
          style={styles.accBtn}
          size={50}
        />
        <ButtonCircle
          onPress={() => navigation.navigate('List')}
          name={'th-list'}
          style={styles.listBtn}
          size={200}
        />
        <ButtonCircle
          onPress={() => this.handleLogout()}
          name={'sign-out'}
          style={styles.logoutBtn}
          size={50}
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
