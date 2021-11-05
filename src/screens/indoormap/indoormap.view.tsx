import React, {Component} from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import {ButtonCircle, FloorList, Marker} from '@shared-view';
import {COOPMART_FLOOR_1} from '@assets';
import {Svg, Polyline} from 'react-native-svg';
import {Place} from 'src/core/entity/Place';

interface State {
  isLoading: boolean;
  place_id: string;
  floor_id: string;
  activeTab: any;
}

interface Props {
  navigation?: any;
  markers: any;
  distance: string;
  path: string;
  placeDetail: Place;
  source_id: string;
  target_id: string;
  doGetPlaceDetail: (place_id: string) => void;
  doGetMarker: (place_id: string, floor_id: string) => void;
  doGetPath: (
    place_id: string,
    floor_id: string,
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
      floor_id: '1',
      activeTab: 1,
    };
  }

  componentDidMount() {
    const {place_id, floor_id} = this.state;
    this.props.doGetPlaceDetail(place_id);
    this.props.doGetMarker(place_id, floor_id);
  }

  getPath = () => {
    const {place_id, floor_id} = this.state;
    const {source_id, target_id} = this.props;

    this.props.doGetPath(place_id, floor_id, source_id, target_id);
  };

  handlePress = (value: any) => {
    console.log(value);
  };
  render() {
    const {navigation, markers, path, distance, placeDetail} = this.props;
    const {activeTab} = this.state;
    return (
      <View style={styles.container}>
        <ImageBackground
          style={{flex: 1, width: 400, height: 650}}
          source={COOPMART_FLOOR_1}
          resizeMode={'contain'}>
          {markers.map((data: any, index: any) => {
            return (
              <Marker
                key={index}
                top={data.longitude}
                left={data.latitude}
                // title={data.name}
                // imageUrl={data.imageUrl}
              />
            );
          })}
          <View style={{marginTop: 20, marginLeft: 20}}>
            <ButtonCircle
              onPress={() =>
                navigation.navigate('Detail', {place_id: placeDetail.id})
              }
              name={'arrow-back'}
              style={{backgroundColor: 'blue'}}
            />
            <ButtonCircle
              onPress={() => navigation.navigate('ListPlace')}
              name={'bars'}
              style={{backgroundColor: 'blue'}}
            />
            <FloorList
              data={placeDetail.floor_list}
              onPress={this.handlePress}
              activeTab={activeTab}
            />
          </View>
          <ButtonCircle
            onPress={() => navigation.navigate('Search')}
            name={'search'}
            style={{marginTop: 400, marginLeft: 350, backgroundColor: 'green'}}
          />
          <Svg style={{position: 'absolute'}}>
            <Polyline
              // points={path}
              points="110,60 110,66 130,66"
              stroke="blue"
              strokeWidth="3"
            />
          </Svg>
          {/* {distance} ? (<Text>Distance: {distance}</Text>) */}
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
  },
});
