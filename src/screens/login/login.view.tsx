import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {ButtonCircle, NormalButton, scale, verticalScale} from '@shared-view';
import AsyncStorage from '@react-native-community/async-storage';

interface Props {
  isLoading?: boolean;
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
    if (this.state.email != '' && this.state.password != '') {
      this.props.doLogin(this.state.email, this.state.password);
    } else {
      Alert.alert('Thông báo', 'Tài khoản hoặc mật khẩu là bắt buộc!');
    }
  };

  componentDidMount() {
    this.backToAuth();
  }
  
  backToAuth = () => {
    const {navigation} = this.props;    
    AsyncStorage.getItem('user_data').then((val: any) => {
      (JSON.parse(val)?.token) ? navigation.navigate('Home') : null;
    });
  }

  render() {
    const {navigation} = this.props;
    this.backToAuth();
    return (
      <View style={styles.container}>
        <View>
          <ButtonCircle
            onPress={() =>
              navigation.navigate('Splash')
            }
            name={'long-arrow-alt-left'}
            size={20}
          />
          <Text style={styles.title}>Log in</Text>
        </View>
        <View style={{justifyContent: 'center', flex: 1, alignSelf: 'center', marginBottom: 50}}>
          <TextInput
            style={styles.userInput}
            placeholder="Email"
            onChangeText={email => this.setState({email})}
            value={this.state.email}
          />
          <TextInput
            style={[styles.userInput, {marginVertical: 40}]}
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={text => this.setState({password: text})}
            value={this.state.password}
          />
          <NormalButton 
            name={"Log In"}
            onPress={() => this.handleLogin()}
            width={'verylarge'}
          /> 
        </View>
        <View style={{justifyContent: 'center', flexDirection: 'row'}}>
          <Text style={{fontSize: 16}}>Don’t have an account yet?</Text>
          <Text onPress={() => navigation.navigate('Register')} style={{color: '#00CEC9', fontSize: 16}}> Sign up</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    padding: 20
  },
  title: {
    width: '100%',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10
  },
  userInput: {
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#000',
    padding: 16,
  },
  button: {
    backgroundColor: '#DA70D6',
    height: 48,
    borderRadius: 6,
    fontSize: 20,
    justifyContent: 'center',
  },
});
