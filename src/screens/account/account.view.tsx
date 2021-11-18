import React, {Component} from 'react';
import {
  View, 
  StyleSheet, 
  TextInput, 
  Image, 
  Text,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {DEFAULT_AVATAR} from '@assets';
import { User } from '@core';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { PopUpMenu } from '@shared-view';
// import ImageResizer from 'react-native-image-resizer';

interface State {
  user_data: User;
  isShowPopupMenu: boolean;
}

interface Props {
  navigation?: any;
  isLoading?: any;
  avatarNew?: any;
  doUpdateAccount: (user_id?: string, username?: any, media?: any) => void;
}

const listchoice = [
  "Cancel", "Open camera", "Choose from library"
];

export default class AccountComponent extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      user_data: {
        id: '',
        user_token: '',
        username: '',
        avatar: ''
      },
      isShowPopupMenu: false,
    }
  }

  updateAccount = () => {
    const {user_data} = this.state;    
    const {isLoading, navigation, doUpdateAccount} = this.props;
    doUpdateAccount(user_data.id, user_data.username, null);
    !isLoading ? navigation.navigate('Home') : null;
  };

  componentDidMount() {
    AsyncStorage.getItem('user_data').then((val: any) => {
      this.setState({user_data: JSON.parse(val)});      
    });    
  }

  onTakePhoto = () => launchCamera({mediaType: 'photo'}, this.onMediaSelect);

  onSelectImagePress = () => launchImageLibrary({mediaType: 'photo'}, this.onMediaSelect);

  onMediaSelect = (media: any) => {
    const {user_data} = this.state;
    const {doUpdateAccount} = this.props;
    doUpdateAccount(user_data.id, null, media);    
  };
  
  selectAction = (value: any) => {
    this.setState({isShowPopupMenu: false});
    switch(value) {
      case 0:
        return;
      case 1:
        this.onTakePhoto()
        break
      case 2:
        this.onSelectImagePress()
      default: return
    }    
  }

  render() {
    const {user_data, isShowPopupMenu} = this.state;
    const {avatarNew} = this.props;
    const avatar = avatarNew || user_data.avatar;

    const setUsername = (val: string) => {
      this.setState(() => {
        return ({
          user_data: {
            ...user_data,
            username: val
          }
        });
      })
    }

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.setState({isShowPopupMenu: true})}>
            <Image source={avatar ? {uri: avatar} : DEFAULT_AVATAR} 
              style={{
                height: 100,
                width: 100,
                borderRadius: 50,
              }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Username:</Text>
        <View>
          <TextInput
            style={styles.username}
            placeholder="New username"
            onChangeText={value => setUsername(value)}
            value={user_data.username}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.btnSave}
            onPress={() => this.updateAccount()}>
            <Text style={styles.btnSaveText}>Update</Text>
          </TouchableOpacity>
        </View>
        <PopUpMenu
          isOpen={isShowPopupMenu} 
          listchoice={listchoice}
          doAction={this.selectAction}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  username: {
    color: '#313131',
    fontSize: 18,
    borderBottomWidth: 1/2,
    marginVertical: 5,
  },
  header: {
    height: 140,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 26,
    color: '#313131',
  },
  btnSave: {
    backgroundColor: '#F96060',
    height: 40,
    borderRadius: 6,
    marginTop: 10,
    justifyContent: 'center',
    width: 200,
  },
  btnSaveText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
  },
});
