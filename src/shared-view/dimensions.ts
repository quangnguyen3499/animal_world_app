import { Dimensions, PixelRatio } from 'react-native';
const { width, height } = Dimensions.get('window');
const [shortDimension, longDimension] = width < height ? [width, height] : [height, width];

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

// Will return linear scaled result of the provided size, based on your device's screen width.
const scale = (size: number) => shortDimension / guidelineBaseWidth * size;

// Will return linear scaled result of the provided size, based on your device's screen height.
const verticalScale = (size: number) => longDimension / guidelineBaseHeight * size;

// If normal scale will increase your size by +2X, moderateScale will only increase it by +X (moderateScale(10) = 15 | moderateScale(10, 0.1) = 11)
const moderateScale = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;

// Converts provided width percentage to independent pixel (dp).
const widthPercentageToDP = (widthPercent: string) => {
  const elemWidth = typeof widthPercent === "number" ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel(width * elemWidth / 100);
};

// Converts provided height percentage to independent pixel (dp).
const heightPercentageToDP = (heightPercent: string) => {
  const elemHeight = typeof heightPercent === "number" ? heightPercent : parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel(height * elemHeight / 100);
};

export { scale, verticalScale, moderateScale, widthPercentageToDP, heightPercentageToDP };