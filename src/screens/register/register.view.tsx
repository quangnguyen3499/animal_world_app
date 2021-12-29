import React, {Component} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  Text,
} from 'react-native';
import {ButtonCircle, NormalButton, scale, verticalScale} from '@shared-view';
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
            name={'chevron-left'}
            size={20}
          />
          <Text style={styles.title}>Register</Text>
        </View>
        <View style={{justifyContent: 'center', flex: 1, alignSelf: 'center', marginBottom: 50}}>
          <TextInput
            style={styles.userInput}
            placeholder="Username"
            onChangeText={username => this.setState({username})}
            value={this.state.username}
          />
          <TextInput
            style={styles.userInput}
            placeholder="Email"
            onChangeText={email => this.setState({email})}
            value={this.state.email}
          />
          <TextInput
            style={styles.userInput}
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={text => this.setState({password: text})}
            value={this.state.password}
          />
          <NormalButton 
            name={"Register"}
            onPress={() => this.handleRegister()}
            width={'verylarge'}
          />
        </View>
        <View style={{justifyContent: 'center', flexDirection: 'row'}}>
          <Text style={{fontSize: 16}}>Already have an account?</Text>
          <Text onPress={() => navigation.navigate('Login')} style={{color: '#00CEC9', fontSize: 16}}> Sign in</Text>
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
    margin: 10
  },
  button: {
    backgroundColor: '#DA70D6',
    height: 48,
    borderRadius: 6,
    fontSize: 20,
    justifyContent: 'center',
  },
});
