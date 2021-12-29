import {ButtonCircle, ImageSlider, NormalButton, TextCustom} from '@shared-view';
import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

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
        <ButtonCircle
          onPress={() => navigation.navigate('Home')}
          name={'chevron-left'}
          style={styles.backBtn}
          color={'#fff'}
          size={24}
          title={'Home'}
        />
        <ImageSlider data={placeDetail.images} style={styles.imageSlider} />
        <View style={styles.content}>
          <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
            <TextCustom 
              text={placeDetail.detail.name}
              size={24}
              weight={true}
            />
            <NormalButton 
              name={"Go to Map"}
              onPress={() => navigation.navigate('IndoorMap', {place_id: placeDetail.detail.id})}
              width={'normal'}
              style={styles.mapBtn}
            />
          </View>
          <TextCustom
            style={styles.normalText}
            text={placeDetail.detail.url}
            size={18}
          />
          <TextCustom 
            style={styles.normalText}
            text={placeDetail.detail.description}
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
    alignItems: 'center',
    backgroundColor: '#388AA4'
  },
  imageSlider: {
    marginTop: 60,
    zIndex: 3,
    elevation: 3
  },
  content: {
    backgroundColor: '#fff',
    top: 250,
    height: '100%',
    position: 'absolute',
    borderRadius: 10,
    padding: 20,
    paddingTop: 40
  },
  backBtn: {
    position: 'absolute',
    left: 10,
    marginTop: 16
  },
  mapBtn: {
    backgroundColor: '#00CEC9',
    borderRadius: 20,
    marginTop: -6
  },
  normalText: {
    fontSize: 12,
    lineHeight: 28
  },
  bottom: {
    alignItems: 'center'
  },
});
