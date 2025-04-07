import React from 'react';
import { View, TouchableOpacity, Text} from 'react-native';
import { style } from './styles';

export function Flag(props) {
  return (
    <TouchableOpacity style={[style.container, {backgroundColor:props?.color}
    ]}>
      <Text style={{color:'#FFF'}}>{props.caption}</Text>
    </TouchableOpacity>
  );
}
