import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ImageBackground,
} from 'react-native';
import {scale, verticalScale} from '@shared-view';
import {BACKGROUND_REGISTER} from '@assets';
import AsyncStorage from '@react-native-community/async-storage';

interface Props {
  doRegister: (email: string, password: string, username: string) => void;
  navigation?: any;
}

interface State {
  email: string;
  username: string;
  password: string;
}

export class RegisterComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
    };
  }

  handleRegister = () => {
    const {doRegister} = this.props;
    const {email, password, username} = this.state;
    if (!email || !password || !username) {
      Alert.alert('Thông báo', 'Tài khoản hoặc mật khẩu là bắt buộc!');
    } else {
      doRegister(email, password, username);
    }
  };

  componentDidMount() {
    this.backToAuth();
  }

  backToAuth = () => {
    const {navigation} = this.props;
    AsyncStorage.getItem('user_data').then((val: any) => {                
      JSON.parse(val).token ? navigation.navigate('Home') : null;
    });
  }

  render() {
    const {navigation} = this.props;
    
    this.backToAuth();
    return (
      <View style={styles.container}>
        <ImageBackground
          source={BACKGROUND_REGISTER}
          resizeMode="cover"
          imageStyle={{borderRadius: 10}}
          style={[{width: 410, height: 656}, styles.container]}>
          <View style={styles.form}>
            <View>
              <TextInput
                style={styles.userInput}
                placeholder="Username"
                onChangeText={username => this.setState({username})}
                value={this.state.username}
              />
            </View>
            <View>
              <TextInput
                style={styles.userInput}
                placeholder="Email"
                onChangeText={email => this.setState({email})}
                value={this.state.email}
              />
            </View>
            <View>
              <TextInput
                style={styles.userInput}
                secureTextEntry={true}
                placeholder="Password"
                onChangeText={text => this.setState({password: text})}
                value={this.state.password}
              />
            </View>
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.handleRegister()}>
                <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={styles.buttonLogin}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    backgroundColor: '#fff',
    width: '80%',
    position: 'absolute', //stick form to bottom
    bottom: 20, //stick form to bottom
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    elevation: 10,
    opacity: 0.9,
  },
  userInput: {
    color: '#313131',
    fontSize: verticalScale(18),
    borderBottomWidth: scale(1 / 2),
    marginHorizontal: scale(20),
    marginVertical: scale(5),
  },
  button: {
    backgroundColor: '#F96060',
    height: verticalScale(48),
    borderRadius: scale(6),
    fontSize: verticalScale(20),
    margin: verticalScale(20),
    justifyContent: 'center',
  },
  buttonLogin: {
    backgroundColor: '#DA70D6',
    height: verticalScale(36),
    borderRadius: scale(6),
    fontSize: verticalScale(16),
    marginBottom: scale(10),
    justifyContent: 'center',
    width: 100,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: verticalScale(20),
    textAlign: 'center',
  },
});
