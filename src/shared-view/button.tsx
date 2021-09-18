import { 
  Image, 
  StyleSheet, 
  TouchableOpacity, 
  Text,
  Dimensions,
} from "react-native";

// <AppButton 
//   title="Hey there!" 
//   size="sm" 
//   backgroundColor="#007bff" 
//   imageUrl="image url"
// />;

const {width} = Dimensions.get('window');
const height = width * 0.6;

const AppButton = ({ onPress, title, size, backgroundColor, imageUrl } 
  : {onPress: any, title: any, size: any, backgroundColor: any, imageUrl: any}) => (
  <TouchableOpacity 
    onPress={onPress} 
    style={[
      styles.appButtonContainer,
      size === "sm" && {
        paddingHorizontal: 8,
        paddingVertical: 6,
        elevation: 6
      },
      backgroundColor && { backgroundColor }
    ]}
  >
    <Text 
      style={[styles.appButtonText, size === "sm" && { fontSize: 14 }]}
    >
      <Image 
        source={require(imageUrl)} 
        style={styles.image}
      />
      {title}
    </Text>  
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  image: {
    width: width * 0.08,
    height: height * 0.08,
    resizeMode: 'contain'
  },
})

export default AppButton