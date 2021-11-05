import {Place} from '@core';
import {ButtonCircle, ImageSlider} from '@shared-view';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface State {
  placeDetail: Place;
  imagesPlace: Array<String>;
}

interface Props {
  navigation?: any;
  doGetPlaceDetail: (place_id: string) => void;
}

export default class DetailComponent extends Component<Props, State> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    const {navigation} = this.props;
    const place_id = JSON.stringify(navigation.getParam('place_id'));
    this.props.doGetPlaceDetail(place_id);
  }

  render() {
    const {navigation} = this.props;
    const {placeDetail, imagesPlace} = this.state;
    // TODO: store all images on firebase

    return (
      <View style={styles.container}>
        {/* TODO: image slider */}
        <ImageSlider data={imagesPlace} />
        <ButtonCircle
          onPress={() => navigation.navigate('Search')}
          name={'search'}
          style={{marginTop: 400, marginLeft: 350, backgroundColor: 'green'}}
        />
        <Text>{placeDetail.name}</Text>
        <Text>{placeDetail.description}</Text>
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
    flex: 1,
    justifyContent: 'center',
  },
});
