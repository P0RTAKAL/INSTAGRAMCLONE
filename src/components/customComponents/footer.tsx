import React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import PropTypes from 'prop-types';

const Footer = ({
    selectedSection = 1,
    goHome = function () {},
    goSearch = function () {},
    goProfile = function () {},
  }) => {
    return (
        <View style={{marginVertical: 5, borderTopWidth: 1, borderTopColor: 'grey'}}>
            <View style={{backgroundColor: 'white', flexDirection: 'row'}}>
                <TouchableOpacity
                    style={{
                    flex: 1,
                    width: '100%',
                    height: 45,
                    alignItems: 'center',
                    justifyContent: 'center',
                    }}
                    onPress={() => goHome()}
                    activeOpacity = {0.8}>
                    <Image 
                        source={selectedSection === 1 ? require('../../assets/images/homeBlack.png'): require('../../assets/images/home.png')} 
                        style={{height: 40, width: 40, tintColor: 'black'}}/>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                    flex: 1,
                    width: '100%',
                    height: 45,
                    alignItems: 'center',
                    justifyContent: 'center',
                    }}
                    onPress={() => goSearch()}
                    activeOpacity = {0.8}>
                    <Image 
                        source={selectedSection === 2 ? require('../../assets/images/searchBlack.png'): require('../../assets/images/search.png')} 
                        style={{height: 40, width: 40, tintColor: 'black'}}/>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                    flex: 1,
                    width: '100%',
                    height: 45,
                    alignItems: 'center',
                    justifyContent: 'center',
                    }}
                    onPress={() => goProfile()}
                    activeOpacity = {0.8}>
                    <Image 
                        source={selectedSection === 3 ? require('../../assets/images/profileBlack.png'): require('../../assets/images/profile.png')} 
                        style={{height: 40, width: 40, tintColor: 'black'}}/>
                </TouchableOpacity>
            </View>
      </View>
    );
  };

export default Footer;