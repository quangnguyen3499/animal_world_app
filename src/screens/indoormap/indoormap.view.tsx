import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { ButtonCircle, Marker } from '@shared-view';
import { COOPMART_FLOOR_1, ICON_SEARCH } from '@assets';
import  {
  Svg,
  Polyline
} from 'react-native-svg';

interface State {
  isLoading: boolean
  place_id: string
  floor_id: string
  source: string
  target: string
  search: any
  places: Array<Object>
}

interface Props {
  navigation?: any
  markers: any
  distance: Number
  path: string
  doGetMarker: (place_id: string, floor_id: string) => void
  doGetPath: (
    place_id: string, 
    floor_id: string, 
    source: string,
    target: string
  ) => void
}

export class IndoorMapComponent extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: false,
      place_id: "1",
      floor_id: "1",
      source: "a",
      target: "c",
      search: "",
      places: Array({
        id: Number,
        name: String
      })
    };
  }

  componentDidMount() {
    const {place_id, floor_id} = this.state;
    this.props.doGetMarker(place_id, floor_id)        
  }

  getPath = () => {
    const {place_id, floor_id, source, target} = this.state;
    this.props.doGetPath(
      place_id,
      floor_id,
      source, 
      target
    );
  }

  render() {
    const { navigation, markers } = this.props;
    return (
      <View style={styles.container}>
        <ImageBackground style={{flex: 1, width: 400, height: 650}} source={COOPMART_FLOOR_1} resizeMode={'contain'}>
        {markers.map((data: any, index: any) => 
          {
            return (
              <Marker
                key={index}
                onPress={this._onPress} 
                top={data["longitude"]} 
                left={data["latitude"]}
              />
            )
          })         
        }
          <ButtonCircle
            backgroundColor={'blue'}
            onPress={() => navigation.navigate('Search')}
            name={"search"}
          />
          <Svg>
            <Polyline
              points="110,60 110,66 130,66"
              stroke="blue"
              strokeWidth="3"
            />
          </Svg>
        </ImageBackground>
      </View>
    )
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
    justifyContent: 'center'
  },
  item: {
    justifyContent: 'center',
    flex: 1,
    margin: 2,
    borderRadius: 10,
    height: 50,
    backgroundColor: '#fff',
  },
  flatlist: {
    margin: 10,
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
});
