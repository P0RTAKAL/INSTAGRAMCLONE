import {Text, View, Image, ScrollView, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import Video from 'react-native-video';

import hearth from '../../assets/images/heart.png';
import blackHeart from '../../assets/images/heartBlack.png';
import v1 from '../../assets/videos/v1.mp4';
import v2 from '../../assets/videos/v2.mp4';
import v3 from '../../assets/videos/v3.mp4';
import v4 from '../../assets/videos/v4.mp4';
import v5 from '../../assets/videos/v5.mp4';
import v6 from '../../assets/videos/v6.mp4';
import v7 from '../../assets/videos/v7.mp4';
import v8 from '../../assets/videos/v8.mp4';
import v9 from '../../assets/videos/v9.mp4';
import v10 from '../../assets/videos/v10.mp4';
import v11 from '../../assets/videos/v11.mp4';
import v12 from '../../assets/videos/v12.mp4';
import v13 from '../../assets/videos/v13.mp4';
import v14 from '../../assets/videos/v14.mp4';
import v15 from '../../assets/videos/v15.mp4';
import p1 from '../../assets/profilePhotos/p1.jpg';
import p2 from '../../assets/profilePhotos/p1.jpg';
import p3 from '../../assets/profilePhotos/p1.jpg';
import p4 from '../../assets/profilePhotos/p1.jpg';
import p5 from '../../assets/profilePhotos/p1.jpg';
import p6 from '../../assets/profilePhotos/p1.jpg';
import p7 from '../../assets/profilePhotos/p1.jpg';
import p8 from '../../assets/profilePhotos/p1.jpg';
import p9 from '../../assets/profilePhotos/p1.jpg';
import p10 from '../../assets/profilePhotos/p1.jpg';
import p11 from '../../assets/profilePhotos/p1.jpg';
import p12 from '../../assets/profilePhotos/p1.jpg';
import f1 from '../../assets/postPhotos/f1.jpg';
import f2 from '../../assets/postPhotos/f1.jpg';
import f3 from '../../assets/postPhotos/f1.jpg';
import f4 from '../../assets/postPhotos/f1.jpg';
import f5 from '../../assets/postPhotos/f1.jpg';
import f6 from '../../assets/postPhotos/f1.jpg';
import f7 from '../../assets/postPhotos/f1.jpg';
import f8 from '../../assets/postPhotos/f1.jpg';
import f9 from '../../assets/postPhotos/f1.jpg';
import f10 from '../../assets/postPhotos/f1.jpg';
import f11 from '../../assets/postPhotos/f1.jpg';
import f12 from '../../assets/postPhotos/f1.jpg';
import f13 from '../../assets/postPhotos/f1.jpg';

const PostComponent = ({
    userLogoUrl = -1,
    userName = '',
    hasVideo = false,
    hasTwoPhotos = false,
    firstPhotoUrl = -1,
    secondPhotoUrl = -1,
    videoUrl = -1,
    hasLikedByMe = false,
    hasSavedByMe = false,
    numberOfLikes = 0,
    time = '',
    description = '',
  }) => {
    const postArray = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, f13];
    const ppArray = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12];
    const videoArray = [v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15];
    var imageArr = [];
    const {width} = Dimensions.get('window');
    const height = width;
    const newWidth = width - 40;

    if (!hasVideo) {
        imageArr.push(postArray[firstPhotoUrl]);
        if (hasTwoPhotos){
            imageArr.push(postArray[secondPhotoUrl]);
        }
    }

    return (
        <View style={{marginVertical: 5, borderColor: 'grey', borderBottomWidth: 1}}>
              <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 5}}>
                <Image source={ppArray[userLogoUrl]} style={{height: 25, width: 25, borderRadius:25, borderWidth: 1, borderColor: 'black'}}/>
                <Text style={{color: 'black', marginLeft: 10}}>{userName}</Text>
              </View>
              {hasVideo? (
                <View style={{maxWidth: newWidth}}>
                    <Text>Video</Text>
                    <Video
                        source={videoArray[videoUrl]}
                        paused={false}
                        controls={false}
                        style={{width: '100%', height: 300}}
                        repeat={true}
                    />
                </View>
              ):(
                <View style={{alignItems: 'center'}}>
                    <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false} >
                        {imageArr.map((image, index) => (
                            <View style={{maxWidth: newWidth}}>
                                <Image
                                key={index} 
                                source={image}
                                style={{width, aspectRatio: 1.2, height}}/>
                                {imageArr.length > 1 ? (
                                    <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                                        <Text style={{color: index == 0 ? 'black' : 'grey', fontSize: 25}}>•</Text>
                                        <Text>   </Text>
                                        <Text style={{color: index == 1 ? 'black' : 'grey', fontSize: 25}}>•</Text>
                                    </View>
                                ):(<View />)}
                            </View>
                            ))}
                    </ScrollView>
                </View>
              )}
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <View style={{flex:1, flexDirection: 'row'}}>
                  <Image 
                    source={hasLikedByMe ? blackHeart : hearth} 
                    style={{height: 25, width: 25}} />
                  <Image source={require('../../assets/images/comment.png')} style={{height: 25, width: 25, marginLeft: 10}} />
                  <Image source={require('../../assets/images/plane.png')} style={{height: 25, width: 25, marginLeft: 10}} />
                </View>
                <View style={{alignItems: 'flex-end', flex:1}}>
                  <Image 
                      source={hasSavedByMe ? require('../../assets/images/saveBlack.png') : require('../../assets/images/save.png')} 
                      style={{height: 25, width: 25}} />
                </View>
              </View>
              <Text style={{color: 'dimgrey', marginTop: 10}}>{numberOfLikes} kişi beğendi</Text>
              <Text style={{color: 'black', marginTop: 3, fontWeight: 'bold'}}>{userName} 
                <Text style={{fontWeight: 'normal'}}>  {description}</Text>
              </Text>
              <Text style={{color: 'dimgrey', marginTop: 10, marginBottom: 10}}>{time}</Text>
            </View>
    );
  };

export default PostComponent;