import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

/**
 * Component showing a button with an icon to perform actions on a post. Can add
 * conditions both to the name and the color of the icon.
 */
export const ActionButton = ({
  nameTrue,
  nameFalse,
  nameCondition = true,
  colorTrue = 'black',
  colorFalse = 'black',
  colorCondition = true,
  onPress,
  style,
  size = 32,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={style}
      testID="actionButton"
      hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}>
      <Icon
        size={size}
        color={colorCondition ? colorTrue : colorFalse}
        name={nameCondition ? nameTrue : nameFalse}
        testID="actionButtonIcon"
      />
    </TouchableOpacity>
  );
};

ActionButton.propTypes = {
  nameTrue: PropTypes.string.isRequired,
  nameFalse: PropTypes.string,
  nameCondition: PropTypes.bool,
  colorTrue: PropTypes.string,
  colorFalse: PropTypes.string,
  colorCondition: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object,
  size: PropTypes.number,
};
