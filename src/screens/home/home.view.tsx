import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ButtonCircle} from '@shared-view';
import AsyncStorage from '@react-native-community/async-storage';
import {DEFAULT_AVATAR} from '@assets';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';

interface State {
  username?: any;
  avatar?: any;
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
    AsyncStorage.getItem('username', (_err, res) => {
      this.setState({username: res});
    });
    // AsyncStorage.getItem('avatar', (_err, res) => {
    //   this.setState({avatar: res});
    // });
    auth().signInAnonymously();
  }

  handleLogout = () => {
    const {doLogout, isLogout, navigation} = this.props;
    doLogout();
    isLogout ? navigation.navigate('Login') : null;
  };

  url() {
    return storage().ref('/user/1.jpeg').getDownloadURL()
      .then(res => console.log(res)
      )
  }

  render() {
    const {avatar} = this.state;
    const {navigation} = this.props;
    // this.url();
    const test = {uri: 'https://firebasestorage.googleapis.com/v0/b/indoormap-a28c2.appspot.com/o/user%2F1.jpeg?alt=media&token=6b0ca904-56bf-4e4f-bbaa-859a4b058ea9'}
    
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.auth}>
            {/* Hi, {username ? username.replace(/['"]+/g, '') : ''}! */}
          </Text>
          <Image source={test} style={{
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
          onPress={() => navigation.navigate('List')}
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
