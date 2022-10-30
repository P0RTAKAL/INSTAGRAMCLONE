import React, { useState } from 'react';
import {View, Image, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import Video from 'react-native-video';

import v1 from '../../assets/videos/v1.mp4';
import v2 from '../../assets/videos/v2.mp4';
import v3 from '../../assets/videos/v3.mp4';
import v4 from '../../assets/videos/v4.mp4';
import v5 from '../../assets/videos/v5.mp4';
import v6 from '../../assets/videos/v6.mp4';
import v7 from '../../assets/videos/v7.mp4';
import v8 from '../../assets/videos/v8.mp4';
import v9 from '../../assets/videos/v9.mp4';
import f2 from '../../assets/postPhotos/f2.jpg';
import f3 from '../../assets/postPhotos/f3.jpg';

const SearchComponent = () => {

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flexDirection: 'row', marginTop: 5}}>
                <Video
                    source={v1}
                    paused={false}
                    controls={false}
                    style={{flex:1, aspectRatio: 1}}
                    repeat={true}
                    useTextureView={false}
                    resizeMode={'cover'}
                    muted={true}
                />
                <Image source={f2} style={{flex:1, aspectRatio: 1, marginLeft: 5}}/>
                <Image source={f3} style={{flex:1, aspectRatio: 1, marginLeft: 5}}/>
            </View>
            <View style={{flexDirection: 'row', marginTop: 5}}>
                <Image source={f2} style={{flex:1, aspectRatio: 1}}/>
                <Video
                    source={v2}
                    paused={false}
                    controls={false}
                    style={{flex:1, aspectRatio: 1, marginLeft: 5}}
                    repeat={true}
                    useTextureView={false}
                    resizeMode={'cover'}
                    muted={true}
                />
                <Image source={f3} style={{flex:1, aspectRatio: 1, marginLeft: 5}}/>
            </View>
            <View style={{flexDirection: 'row', marginTop: 5}}>
                <Image source={f2} style={{flex:1, aspectRatio: 1}}/>
                <Image source={f3} style={{flex:1, aspectRatio: 1, marginLeft: 5}}/>
                <Video
                    source={v3}
                    paused={false}
                    controls={false}
                    style={{flex:1, aspectRatio: 1, marginLeft: 5}}
                    repeat={true}
                    useTextureView={false}
                    resizeMode={'cover'}
                    muted={true}
                />
            </View>
            <View style={{flexDirection: 'row', marginTop: 5}}>
                <Video
                    source={v4}
                    paused={false}
                    controls={false}
                    style={{flex:1, aspectRatio: 1}}
                    repeat={true}
                    useTextureView={false}
                    resizeMode={'cover'}
                    muted={true}
                />
                <Image source={f2} style={{flex:1, aspectRatio: 1, marginLeft: 5}}/>
                <Image source={f3} style={{flex:1, aspectRatio: 1, marginLeft: 5}}/>
            </View>
            <View style={{flexDirection: 'row', marginTop: 5}}>
                <Image source={f2} style={{flex:1, aspectRatio: 1}}/>
                <Video
                    source={v5}
                    paused={false}
                    controls={false}
                    style={{flex:1, aspectRatio: 1, marginLeft: 5}}
                    repeat={true}
                    useTextureView={false}
                    resizeMode={'cover'}
                    muted={true}
                />
                <Image source={f3} style={{flex:1, aspectRatio: 1, marginLeft: 5}}/>
            </View>
            <View style={{flexDirection: 'row', marginTop: 5}}>
                <Image source={f2} style={{flex:1, aspectRatio: 1}}/>
                <Image source={f3} style={{flex:1, aspectRatio: 1, marginLeft: 5}}/>
                <Video
                    source={v6}
                    paused={false}
                    controls={false}
                    style={{flex:1, aspectRatio: 1, marginLeft: 5}}
                    repeat={true}
                    useTextureView={false}
                    resizeMode={'cover'}
                    muted={true}
                />
            </View>
            <View style={{flexDirection: 'row', marginTop: 5}}>
                <Video
                    source={v7}
                    paused={false}
                    controls={false}
                    style={{flex:1, aspectRatio: 1}}
                    repeat={true}
                    useTextureView={false}
                    resizeMode={'cover'}
                    muted={true}
                />
                <Image source={f2} style={{flex:1, aspectRatio: 1, marginLeft: 5}}/>
                <Image source={f3} style={{flex:1, aspectRatio: 1, marginLeft: 5}}/>
            </View>
            <View style={{flexDirection: 'row', marginTop: 5}}>
                <Image source={f2} style={{flex:1, aspectRatio: 1}}/>
                <Video
                    source={v8}
                    paused={false}
                    controls={false}
                    style={{flex:1, aspectRatio: 1, marginLeft: 5}}
                    repeat={true}
                    useTextureView={false}
                    resizeMode={'cover'}
                    muted={true}
                />
                <Image source={f3} style={{flex:1, aspectRatio: 1, marginLeft: 5}}/>
            </View>
            <View style={{flexDirection: 'row', marginTop: 5}}>
                <Image source={f2} style={{flex:1, aspectRatio: 1}}/>
                <Image source={f3} style={{flex:1, aspectRatio: 1, marginLeft: 5}}/>
                <Video
                    source={v9}
                    paused={false}
                    controls={false}
                    style={{flex:1, aspectRatio: 1, marginLeft: 5}}
                    repeat={true}
                    useTextureView={false}
                    resizeMode={'cover'}
                    muted={true}
                />
            </View>
        </ScrollView>
    );
  };

export default SearchComponent;