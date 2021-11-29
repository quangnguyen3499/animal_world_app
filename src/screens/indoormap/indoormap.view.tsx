import React, {Component} from 'react';
import {View, StyleSheet, ImageBackground, Text} from 'react-native';
import {ButtonCircle, FloorList, Marker} from '@shared-view';
import {Svg, Polyline} from 'react-native-svg';
import { DEFAULT_MAP } from '@assets';

interface State {
  isLoading: boolean;
  place_id: string;
  floor_id: any;
}

interface Props {
  route?: any;
  navigation?: any;
  shops: any;
  distance: string;
  path: string;
  placeDetail: any;
  source_id: string;
  target_id: string;
  doGetListShop: (place_id: string, floor_id: any) => void;
  doGetPath: (
    place_id: string,
    floor_id: any,
    source: string,
    target: string,
  ) => void;
}

export class IndoorMapComponent extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: false,
      place_id: '1',
      floor_id: 1,
    };
  }

  componentDidMount() {
    const {route, doGetListShop} = this.props;
    let {place_id, floor_id} = this.state;
    this.setState({place_id: JSON.stringify(route.params.place_id)});    
    doGetListShop(place_id, floor_id);
  }

  getPath = () => {
    const {place_id, floor_id} = this.state;
    const {source_id, target_id, doGetPath} = this.props;

    doGetPath(place_id, floor_id, source_id, target_id);
  };

  onChangeFloor = (value: any) => {
    let {place_id} = this.state;
    const {doGetListShop} = this.props;          
    this.setState({floor_id: value}, () => doGetListShop(place_id, this.state.floor_id))        
  }

  render() {
    const {navigation, shops, path, distance, placeDetail} = this.props;
    const {floor_id} = this.state;
    const imgMap = placeDetail.floormap[floor_id-1];    
    
    return (
      <View style={styles.container}>
        <ImageBackground
          style={{flex: 1, width: 440, height: 640}}
          source={imgMap ? {uri: imgMap} : DEFAULT_MAP}
          resizeMode={'contain'}
        >
          {shops.map((data: any, index: any) => {
            return (
              <Marker
                key={index}
                top={data.coordinate.longitude}
                left={data.coordinate.latitude}
                logoUrl={data.logo_url}
              />
            );
          })}
          <View style={{marginTop: 20, marginLeft: 20, position: 'absolute'}}>
            <ButtonCircle
              onPress={() =>
                navigation.navigate('Detail', {place_id: placeDetail.id})
              }
              name={'long-arrow-alt-left'}
              size={20}
            />
            <ButtonCircle
              onPress={() => navigation.navigate('ListPlace')}
              name={'bars'}
              size={18}
              style={{backgroundColor: 'orange', marginLeft: 2, borderColor: 'white', borderWidth: 1}}
            />
            <FloorList
              data={placeDetail.detail.floor_list}
              onPress={(value: any) => this.onChangeFloor(value)}
              activeTab={floor_id}
            />
            <ButtonCircle
              onPress={() => navigation.navigate('Search')}
              name={'search'}
              size={20}
            />
            <Text style={styles.distance}>Distance: {distance || 0}</Text>
          </View>
          {path ? (
            <Svg style={{position: 'absolute'}}>
              <Polyline
                points={path}
                stroke="blue"
                strokeWidth="3"
              />
            </Svg>) : null
          }
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    paddingTop: 10,
  },
  distance: {

  },
});
