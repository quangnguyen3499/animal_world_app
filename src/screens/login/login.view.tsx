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
import {BACKGROUND_LOGIN} from '@assets';

interface Props {
  isLoading?: boolean;
  isLogged?: boolean;
  doLogin: (email: string, password: string) => void;
  navigation?: any;
}

interface State {
  email: string;
  password: string;
}

export class LoginComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleLogin = () => {
    // Check validation
    if (this.state.email != '' && this.state.password != '') {
      this.props.doLogin(this.state.email, this.state.password);
    } else {
      Alert.alert('Thông báo', 'Tài khoản hoặc mật khẩu là bắt buộc!');
    }
  };

  componentDidMount() {
    const {isLogged, navigation} = this.props;
    isLogged ? navigation.navigate('Home') : null;
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <ImageBackground
          source={BACKGROUND_LOGIN}
          resizeMode="cover"
          imageStyle={{borderRadius: 10}}
          style={[{width: 410, height: 656}, styles.container]}>
          <View style={styles.form}>
            <Text style={styles.title}>Welcome Back</Text>
            <View>
              <TextInput
                style={styles.userInput}
                placeholder="Enter your email"
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
              <View style={styles.forgotRight}>
                <Text style={styles.textForgot}>Forgot Password</Text>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.handleLogin()}>
                  <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.buttonRegister}
                  onPress={() => navigation.navigate('Register')}>
                  <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
              </View>
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
  title: {
    width: '100%',
    fontSize: verticalScale(32),
    color: '#313131',
  },
  userInput: {
    color: '#313131',
    fontSize: verticalScale(18),
    borderBottomWidth: scale(1 / 2),
    marginVertical: scale(5),
  },
  userText: {
    width: '100%',
    fontSize: verticalScale(22),
    color: '#313131',
    marginTop: verticalScale(40),
  },
  forgotRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  textForgot: {
    color: '#313131',
    fontSize: verticalScale(20),
    marginVertical: scale(10),
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
  buttonRegister: {
    backgroundColor: '#F96060',
    height: verticalScale(36),
    borderRadius: scale(6),
    fontSize: verticalScale(16),
    marginTop: scale(10),
    justifyContent: 'center',
    width: 100,
    alignSelf: 'center',
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
    padding: scale(20),
    opacity: 0.9,
  },
});
