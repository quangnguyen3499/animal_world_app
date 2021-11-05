import {ButtonCircle} from '@shared-view';
import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {DEFAULT_AVATAR} from '@assets';

interface State {
  user_id?: string;
  avatar?: string;
  username?: string;
}

interface Props {
  navigation?: any;
  isLoading?: any;
  doUpdateAccount: (user_id?: string, username?: string) => void;
}

export default class AccountComponent extends Component<Props, State> {
  constructor(props: any) {
    super(props);
  }

  updateAccount = () => {
    const {user_id, username} = this.state;
    const {isLoading, navigation} = this.props;
    this.props.doUpdateAccount(user_id, username);
    isLoading ? navigation.navigate('Home') : null;
  };

  componentDidMount() {
    AsyncStorage.getItem('username', (_err, res) => {
      this.setState({username: res});
    });
    AsyncStorage.getItem('avatar', (_err, res) => {
      this.setState({avatar: res});
    });
    AsyncStorage.getItem('user_id', (_err, res) => {
      this.setState({user_id: res});
    });
  }

  render() {
    // const {avatar} = this.state;

    return (
      <View style={styles.container}>
        {/* <Image source={avatar ? DEFAULT_AVATAR : avatar} /> */}
        <View>
          <TextInput
            style={styles.username}
            placeholder="New username"
            onChangeText={value => this.setState({username: value})}
            value={this.state.username}
          />
        </View>
        <View>
          <ButtonCircle title={'Save'} onPress={() => this.updateAccount} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  username: {
    //
  },
});
