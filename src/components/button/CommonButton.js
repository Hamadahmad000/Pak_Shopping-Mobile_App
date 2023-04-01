import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const CommonButton = ({onpress, title, bgColor, textcolor}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, {backgroundColor: bgColor}]}
      onPress={onpress}>
      <Text style={{color: textcolor, fontSize: responsiveFontSize(2)}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
const {height, width} = Dimensions.get('screen');
export default CommonButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: width - responsiveWidth(15),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: responsiveHeight(2.7),
    borderRadius: responsiveWidth(1),
  },
});
