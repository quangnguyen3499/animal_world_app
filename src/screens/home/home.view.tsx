import { DEFAULT_AVATAR } from '@assets';
import { User } from '@core';
import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';

interface Props {
  navigation?: any;
  listplace: any;
  city: any;
  isLogout: boolean;
  username: String;
  avatarNew?: String;
  doGetListPlace: () => void;
  doGetCity: () => void;
}

interface State {
  user_data: User;
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
    this.props.doGetCity(); 
    this.props.doGetListPlace();
  }

  backToAuth = () => {
    const {navigation} = this.props;
    AsyncStorage.getItem('user_data').then((val: any) => {                  
      !JSON.parse(val).token ? navigation.navigate('Login') : null;
    });
  }

  renderItem = ({item, index}: {item: any; index: number}) => { 
    const {navigation} = this.props;

    return (
      <TouchableOpacity
        style={styles.item}
        key={index}
        onPress={() => navigation.navigate('Detail', {place_id: item.id})}>
        <ImageBackground 
          source={{uri: item.thumbnail_url}} 
          style={styles.itemImage}
        >
          <Text style={styles.itemText}>{item.name}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  renderCity = ({item, index}: {item: any; index: number}) => {
    const {navigation} = this.props;    
    return (
      <TouchableOpacity
        style={styles.itemCity}
        key={index}
        onPress={() => {}}
      >
        <ImageBackground 
          source={{uri: item.thumbnail_url}}
          style={{width: 120, height: 140, borderRadius: 10, overflow: 'hidden'}}
        >
          <Text style={styles.itemCityName}>{item.name}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  render() {
    const {listplace, navigation, username, avatarNew, city} = this.props;
    const {user_data} = this.state;
    this.backToAuth();
    let avatar = avatarNew || user_data.avatar;

    let checkListPlaceExist = Object.keys(listplace).length === 0

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Account')}
          >
            <Image source={avatar ? {uri: avatar} : DEFAULT_AVATAR} style={{
              height: 50,
              width: 50,
              borderRadius: 25,
            }}
            />
          </TouchableOpacity>
          <View style={{marginLeft: 10}}>
            <Text style={{fontWeight: 'bold', opacity: 0.5}}>WELCOME BACK</Text>
            <Text style={styles.auth}>
              {username || user_data.username}
            </Text>
          </View>
        </View>
        {checkListPlaceExist ? (
          <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
            <ActivityIndicator size={60} color="blue" />
          </View>
        ) : (
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 20, marginLeft: 18}}>City</Text>
            <FlatList
              data={city}
              renderItem={this.renderCity}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{marginLeft: 16}}
            />
            <Text style={{fontWeight: 'bold', fontSize: 20, margin: 18}}>Most Popular</Text>
            <FlatList
              data={listplace}
              renderItem={this.renderItem}
              showsVerticalScrollIndicator={false}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  auth: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    height: 160,
    backgroundColor: '#fff',
    margin: 4
  },
  itemCity: {
    height: 140,
    margin: 4,
    backgroundColor: '#fff'
  },
  itemImage: {
    justifyContent: 'center',
    height: 160,
    borderRadius: 10,
    overflow: 'hidden'
  },
  itemText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    bottom: -56,
    backgroundColor: 'rgba(139,139,145, 0.5)'
  },
  itemCityName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    bottom: -50,
    padding: 8
  },
  header: {
    height: 80,
    backgroundColor: '#388AA4',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    marginBottom: 20
  },
  listplace: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 40,
    padding: 10,
  },
});
