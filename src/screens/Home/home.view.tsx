import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  Alert
} from 'react-native';
import { ButtonCustom, scale, verticalScale } from '@shared-view';
import { ICON_LOGOUT } from '@assets';

interface State {}

interface Props {
  navigation?: any;
  isLoading: boolean;
  doLogout: () => void
}

export class HomeComponent extends Component<Props, State> {
  constructor(props: any) {
    super(props);
  }

  handleLogout = () => {
    this.props.doLogout();
  }

  render() {
    const { navigation } = this.props;
    
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.handleLogout()}
        >
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("IndoorMap")}
        >
          <Text style={styles.buttonText}>Indoor Map</Text>
        </TouchableOpacity>
        <ButtonCustom />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
