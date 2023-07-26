/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
  operationText: string;
  colorButton?: string;
  buttonSize?: boolean;
  pressAction: (textNumber:string) => void;
}

export const Buttons = ({operationText, colorButton = '#2D2D2D', buttonSize = false, pressAction}:Props) => {
  return (
    <TouchableOpacity onPress={()=>pressAction(operationText)}>
      <View style={{...styles.button, backgroundColor: colorButton, width: buttonSize ? 180 : 80  }}>
        <Text style={{...styles.buttonText, color: (colorButton === '#9b9b9b') ? 'black' : 'white' }}>{operationText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 80,
    width: 80,
    backgroundColor: '#2D2D2D',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: '300',
  },
});
