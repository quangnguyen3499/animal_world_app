import {Place} from '@core';
import {ButtonCircle, ImageSlider, NormalButton, TextCustom} from '@shared-view';
import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  navigation?: any;
  placeDetail?: any;
  route?: any;
  isLoading?: boolean;
  doGetPlaceDetail: (place_id: string) => void;
}

export default class DetailComponent extends Component<Props, {}> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    const {route, doGetPlaceDetail} = this.props;
    const place_id = JSON.stringify(route.params.place_id);    
    doGetPlaceDetail(place_id);
  }

  render() {
    const {navigation, placeDetail, isLoading} = this.props;
    
    if(Object.keys(placeDetail).length === 0 || isLoading)
      return (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size={60} color="blue" />
        </View>
      )

    return (
      <View style={styles.container}>
        <ImageSlider data={placeDetail.images} />
        <ButtonCircle
          onPress={() => navigation.navigate('Home')}
          name={'long-arrow-alt-left'}
          style={styles.backBtn}
          color={'#fff'}
          size={24}
        />
        <NormalButton 
          name={"Go to Map"}
          onPress={() => navigation.navigate('IndoorMap', {place_id: placeDetail.detail.id})}
          width={'normal'}
          style={styles.mapBtn}
        />
        <View style={styles.content}>
          <TextCustom 
            style={styles.name}
            text={placeDetail.detail.name}
            size={28}
            weight={true}
          />
          <TextCustom 
            style={styles.normalText}
            text={`Mô tả: ${placeDetail.detail.description}`}
            size={20}
          />
          <TextCustom 
            style={styles.normalText}
            text={`Url: ${placeDetail.detail.url}`}
            size={20}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    alignItems: 'center'
  },
  content: {
    backgroundColor: '#fff',
    top: 400,
    width: 360,
    position: 'absolute',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    padding: 5,
  },
  backBtn: {
    position: 'absolute',
    left: 10,
  },
  mapBtn: {
    backgroundColor: '#00CEC9',
    position: 'absolute',
    top: 320,
    left: 0,
    borderRadius: 20,
  },
  name: {
    textAlign: 'center'
  },
  normalText: {
    fontSize: 20,
    margin: 10,
  },
  bottom: {
    alignItems: 'center'
  },
});
