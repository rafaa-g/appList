import React from 'react';
import { View } from 'react-native';
import { style } from './styles';

export function Ball(props) {
  return (
    <View style={[style.ball, { borderColor: props.color || 'gray' }]} />
  );
}
