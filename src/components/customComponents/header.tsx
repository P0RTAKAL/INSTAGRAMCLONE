import React from 'react';
import {TouchableOpacity, StyleSheet, View, Image} from 'react-native';
import PropTypes from 'prop-types';

const Header = ({
    selectedSection = 1,
    goLikes = function () {},
    goSharePost = function () {},
  }) => {
    return (
        <View style={{flexDirection: 'row', marginHorizontal: 20, marginTop: 10, alignItems: 'center', marginBottom: 10}}>
            <View style={{height: 31, width: 109, flex:2.5}}>
              <Image 
                source={require('../../assets/images/instaText.png')} 
                style={{height: 30, width: 108}}/>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end', flex: 1}}>
                <TouchableOpacity
                    style={{
                    flex: 1,
                    height: 25, width: 25,
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    }}
                    onPress={() => goSharePost()}
                    activeOpacity = {0.8}>
                    <Image
                        source={selectedSection === 4 ? require('../../assets/images/postBlack.png') : require('../../assets/images/post.png')}
                        style={{height: 25, width: 25}} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                    flex: 1,
                    height: 25, 
                    width: 25,
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    }}
                    onPress={() => goLikes()}
                    activeOpacity = {0.8}>
                    <Image 
                      source={selectedSection === 5 ? require('../../assets/images/heartBlack.png') : require('../../assets/images/heart.png')}
                      style={{height: 25, width: 25}} />
                </TouchableOpacity>
            </View>  
        </View>
    );
  };

export default Header;