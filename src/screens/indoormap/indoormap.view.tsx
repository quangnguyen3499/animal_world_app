import React, {Component} from 'react';
import {View, StyleSheet, ImageBackground, Text} from 'react-native';
import {ButtonCircle, FloorList, Marker} from '@shared-view';
import {Svg, Polyline} from 'react-native-svg';
import { DEFAULT_MAP } from '@assets';
import ImageViewer from 'react-native-image-zoom-viewer';

interface State {
  isLoading: boolean;
  floor_id: any;
  zoomable: boolean;
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
      floor_id: 1,
      zoomable: false,
    };
  }

  componentDidMount() {
    const {doGetListShop, placeDetail} = this.props;
    let {floor_id} = this.state;    
    doGetListShop(placeDetail.detail.id, floor_id);
  }

  getPath = () => {
    const {floor_id} = this.state;
    const {source_id, target_id, doGetPath, placeDetail} = this.props;

    doGetPath(placeDetail.detail.id, floor_id, source_id, target_id);
  };

  onChangeFloor = (value: any) => {
    const {doGetListShop, placeDetail} = this.props;          
    this.setState({floor_id: value}, () => doGetListShop(placeDetail.detail.id, this.state.floor_id))        
  }

  changeToZoomable = () => {
    const {zoomable} = this.state;
    this.setState({zoomable: !zoomable});
  }

  render() {
    const {navigation, shops, path, distance, placeDetail} = this.props;
    const {floor_id, zoomable} = this.state;
    const imgMap = placeDetail.floormap[floor_id-1];    
    
    return (
      <View style={styles.container}>
        <ImageViewer
          imageUrls={[{url: imgMap ? imgMap : DEFAULT_MAP}]}
          backgroundColor={'#fff'}
          enableImageZoom={zoomable}
          renderIndicator={(currentIndex, allSize) => <Text></Text>}
        />
        {shops.map((data: any, index: any) => {
          return (
            !zoomable ? (
              <Marker
                key={index}
                top={data.coordinate.longitude}
                left={data.coordinate.latitude}
                logoUrl={data.logo_url}
              />
            ) : []
          );
        })}
        {path && !zoomable ? (
          <Svg style={{position: 'absolute'}}>
            <Polyline
              points={path}
              stroke="blue"
              strokeWidth="3"
            />
          </Svg>) : null
        }
        <View style={{top: 50, marginLeft: 20, position: 'absolute'}}>
          <ButtonCircle
            onPress={() =>
              navigation.navigate('Detail', {place_id: placeDetail.detail.id})
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
          <ButtonCircle
            onPress={() => this.changeToZoomable()}
            name={'search-plus'}
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
