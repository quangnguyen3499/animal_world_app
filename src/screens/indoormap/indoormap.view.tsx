import React, {Component} from 'react';
import {View, StyleSheet, ImageBackground, Text} from 'react-native';
import {ButtonCircle, Direction, FloorList, Marker, MultiModal, SingleModal} from '@shared-view';
import {Svg, Polyline} from 'react-native-svg';
import { DEFAULT_MAP } from '@assets';
import ImageViewer from 'react-native-image-zoom-viewer';
import { Pointer } from '@core';

interface State {
  isLoading: boolean;
  floor_id: any;
  zoomable: boolean;
  showSearchModal: any;
  marker: Pointer;
  showPath: boolean;
  showMarker: boolean;
}

interface Props {
  route?: any;
  navigation?: any;
  shops: any;
  distance: string;
  path: string;
  placeDetail: any;
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
      floor_id: 1,
      zoomable: false,
      showSearchModal: 0,
      marker: {
        longitude: 0,
        latitude: 0
      },
      showPath: false,
      showMarker: false,
    };
  }

  componentDidMount() {
    const {doGetListShop, placeDetail} = this.props;
    let {floor_id} = this.state;    
    doGetListShop(placeDetail.detail.id, floor_id);
  }

  onChangeFloor = (value: any) => {
    const {doGetListShop, placeDetail} = this.props;          
    this.setState({floor_id: value}, () => doGetListShop(placeDetail.detail.id, this.state.floor_id))
    this.setState({showMarker: false})
    this.setState({showPath: false}) 
  }

  changeToZoomable = () => {
    const {zoomable} = this.state;
    this.setState({zoomable: !zoomable});
  }

  doShowShop = (value: any) => {
    const {shops} = this.props;
    var temp = shops.find((e: any) => e.id == value)
     
    this.setState({showSearchModal: 0})
    this.setState({showMarker: true})
    this.setState(prev => ({
      marker: {
        ...prev.marker,
        longitude: temp.coordinate.longitude,
        latitude: temp.coordinate.latitude,
      }
    }))
  }

  doShowPath = (idFrom: any, idTo: any) => {
    this.setState({showSearchModal: 0})
    const {floor_id} = this.state
    const {doGetPath, placeDetail} = this.props

    doGetPath(placeDetail.detail.id, floor_id, idFrom, idTo)
    this.setState({showPath: true})
  }

  render() {
    const {navigation, shops, distance, placeDetail} = this.props
    const {floor_id, zoomable, showPath, showMarker} = this.state
    const imgMap = placeDetail.floormap[floor_id-1]

    let path = this.props.path || '';
    let start = path?.split(' ')[0] || '0,0';
    let end = path?.split(' ').pop() || '0,0';
    let [sLeft, sTop] = start?.split(',').map(e => parseInt(e, 10));
    let [eLeft, eTop] = end?.split(',').map(e => parseInt(e, 10));

    return (
      <View style={styles.container}>
        <ImageViewer
          imageUrls={[{url: imgMap ? imgMap : DEFAULT_MAP}]}
          backgroundColor={'#fff'}
          enableImageZoom={zoomable}
          renderIndicator={(currentIndex, allSize) => <Text></Text>}
        />
        {showMarker && !zoomable ? 
          <Marker
            top={this.state.marker.longitude-30}
            left={this.state.marker.latitude-11}
          /> : null
        }
        {showPath && !zoomable ? (
          <>
            <Marker
              top={sTop-30}
              left={sLeft-11}
              color={'green'}
            />
            <Direction
              path={path}
              distance={distance}
              top={eTop}
              left={eLeft}
            />
            <Marker
              top={eTop-30}
              left={eLeft-11}
            />
          </>) : null
        }
        <View style={{top: 20, marginLeft: 20, position: 'absolute'}}>
          <ButtonCircle
            onPress={() =>
              navigation.navigate('Detail', {place_id: placeDetail.detail.id})
            }
            name={'long-arrow-alt-left'}
            size={20}
          /> 
          <ButtonCircle
            onPress={() => this.setState({showSearchModal: 1})}
            name={'search-location'}
            size={20}
          />
          <ButtonCircle
            onPress={() => this.setState({showSearchModal: 2})}
            name={'location-arrow'}
            size={18}
          />
          <ButtonCircle
            onPress={() => this.changeToZoomable()}
            name={'search-plus'}
            size={20}
          />
          <FloorList
            data={placeDetail.detail.floor_list}
            onPress={(value: any) => this.onChangeFloor(value)}
            activeTab={floor_id}
          />
        </View>
        <SingleModal 
          onVisible={this.state.showSearchModal == 1}
          onSearch={(value: any) => this.doShowShop(value)}
          data={shops}
          onClose={() => this.setState({showSearchModal: 0})}
        />
        <MultiModal 
          onVisible={this.state.showSearchModal == 2}
          onSearch={(value: any, id: any) => this.doShowPath(value, id)}
          data={shops}
          onClose={() => this.setState({showSearchModal: 0})}
        />
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
  }
});
