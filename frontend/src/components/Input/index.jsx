import React, { forwardRef } from "react";
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome, Octicons } from '@expo/vector-icons';
import { themas } from "../../global/themes";
import { style } from "./styles";

export const Input = forwardRef((props, ref) => {
  const {
    IconLeft,
    IconRigth,
    iconLeftName,
    iconRightName,
    title,
    onIconLeftPress,
    onIconRigthPress,
    height,
    labelStyle,
    ...rest
  } = props;

  const calculateSizeWidth = () => {
    if (IconLeft && IconRigth) {
      return '80%';
    } else if (IconLeft || IconRigth) {
      return '90%';
    } else {
      return '100%';
    }
  };

  const calculateSizePaddingLeft = () => {
    if (IconLeft && IconRigth) {
      return 0;
    } else if (IconLeft || IconRigth) {
      return 10;
    } else {
      return 20;
    }
  };

  return (
    <>
      {title && <Text style={[style.titleInput, labelStyle]}>{title}</Text>}
      <View style={[style.boxInput, {
        paddingLeft: calculateSizePaddingLeft(),
        height: height ? height : 40,
        padding: 5
      }]}>
        {IconLeft && iconLeftName && (
          <TouchableOpacity onPress={onIconLeftPress} style={style.Button}>
            <IconLeft
              name={iconLeftName}
              size={20}
              color={themas.colors.gray}
              style={style.Icon}
            />
          </TouchableOpacity>
        )}
        <TextInput
          style={[style.input, { width: calculateSizeWidth(), height: '100%' }]}
          ref={ref}
          multiline
          {...rest}
        />
        {IconRigth && iconRightName && (
          <TouchableOpacity onPress={onIconRigthPress} style={style.Button}>
            <IconRigth
              name={iconRightName}
              size={20}
              color={themas.colors.gray}
              style={style.Icon}
            />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
});
