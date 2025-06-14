import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { themas } from '../../global/themes';

export function DeleteIcon({ onPress }) {
  return (
    <TouchableOpacity 
      onPress={onPress}
      style={{ marginRight: 16 }}
    >
      <MaterialIcons 
        name="delete" 
        size={24} 
        color={themas.colors.red} 
      />
    </TouchableOpacity>
  );
}