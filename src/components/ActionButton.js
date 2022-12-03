import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';

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
    <TouchableOpacity onPress={onPress} style={style}>
      <Icon
        size={size}
        color={colorCondition ? colorTrue : colorFalse}
        name={nameCondition ? nameTrue : nameFalse}
      />
    </TouchableOpacity>
  );
};
