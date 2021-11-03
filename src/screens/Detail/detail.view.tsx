import { ButtonCircle } from '@shared-view';
import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const height = width * 0.6;

interface State {
  placeDetail: Object;
}

interface Props {
  navigation?: any;
  route: any;
  doGetPlaceDetail: (place_id: string) => void;
}

export default class DetailComponent extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      placeDetail: {},
    };
  }

  componentDidMount() {
    const { place_id } = this.props.route.params;

    const id = JSON.stringify(place_id);
    this.props.doGetPlaceDetail(id);
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text>test</Text>
        {/* view place details */}
        <ButtonCircle
          onPress={() => navigation.navigate('IndoorMap')}
          name={'map'}
          style={{backgroundColor: 'blue'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
  },
});
