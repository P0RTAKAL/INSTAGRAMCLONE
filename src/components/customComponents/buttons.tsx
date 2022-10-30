import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View, Image} from 'react-native';
import PropTypes from 'prop-types';

const BlueButton = ({
    activeOpacity = 0.8,
    onPress = function () {},
    title = '',
    disabled = false,
  }) => {
    return (
    <View>
        <TouchableOpacity
            disabled={disabled}
              style={{
                marginTop: 10,
                backgroundColor: disabled ? 'lightskyblue' : 'deepskyblue',
                width: '100%',
                height: 45,
                alignItems: 'center',
                borderRadius: 5,
                justifyContent: 'center',
              }}
              onPress={() => {
                if(!disabled) {
                    onPress();
                }    
              }}
              activeOpacity={activeOpacity}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>{title}</Text>
        </TouchableOpacity>
    </View>
    );
  };

export default BlueButton;