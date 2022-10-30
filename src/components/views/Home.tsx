import React, {useState, type PropsWithChildren} from 'react';
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
} from 'react-native';
import Footer from '../customComponents/footer';
import PostComponent from '../customComponents/postComponent';
import Header from '../customComponents/header';
import SearchComponent from '../customComponents/searchComponent';

const Home = () => {
  const [selectedSection, setSelectedSection] = useState(1);
  const dashboardMock1: {
    userLogoUrl: number,
    userName: string,
    hasVideo: boolean,
    hasTwoPhotos : boolean,
    firstPhotoUrl : number,
    secondPhotoUrl : number,
    videoUrl : number,
    hasLikedByMe : boolean,
    hasSavedByMe : boolean,
    numberOfLikes : number,
    time : string,
    description: string,
    index: number
  } = {
    userLogoUrl : 1,
    userName : 'profile1',
    hasVideo : false,
    hasTwoPhotos : false,
    firstPhotoUrl : 1,
    secondPhotoUrl : -1,
    videoUrl : -1,
    hasLikedByMe : true,
    hasSavedByMe : false,
    numberOfLikes : 272,
    time : '1 saat önce',
    description: 'Lovely...',
    index: 1,
  };
  const dashboardMock2: {
    userLogoUrl: number,
    userName: string,
    hasVideo: boolean,
    hasTwoPhotos : boolean,
    firstPhotoUrl : number,
    secondPhotoUrl : number,
    videoUrl : number,
    hasLikedByMe : boolean,
    hasSavedByMe : boolean,
    numberOfLikes : number,
    time : string,
    description: string,
    index: number,
  } = {
    userLogoUrl: 2,
    userName: 'profile2',
    hasVideo: false,
    hasTwoPhotos: true,
    firstPhotoUrl: 2,
    secondPhotoUrl: 3,
    videoUrl: -1,
    hasLikedByMe: true,
    hasSavedByMe: true,
    numberOfLikes: 372,
    time: '2 saat önce',
    description: 'Perfect',
    index: 2,
  };
  const dashboardMock3: {
    userLogoUrl: number,
    userName: string,
    hasVideo: boolean,
    hasTwoPhotos : boolean,
    firstPhotoUrl : number,
    secondPhotoUrl : number,
    videoUrl : number,
    hasLikedByMe : boolean,
    hasSavedByMe : boolean,
    numberOfLikes : number,
    time : string,
    description: string,
    index: number,
  } = {
    userLogoUrl : 3,
    userName : 'profile3',
    hasVideo : true,
    hasTwoPhotos : false,
    firstPhotoUrl : 5,
    secondPhotoUrl : 5,
    videoUrl : 1,
    hasLikedByMe : true,
    hasSavedByMe : false,
    numberOfLikes : 372,
    time : '3 saat önce',
    description: 'Amazing...',
    index: 3,
  }
  const homeMockData = [dashboardMock1, dashboardMock2, dashboardMock3];
  
  function renderTabs() {
    switch (selectedSection) {
      case 1: {
        return (
          <FlatList
            data={homeMockData}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <PostComponent
                  userLogoUrl={item.userLogoUrl}
                  userName={item.userName}
                  hasVideo={item.hasVideo}
                  hasTwoPhotos={item.hasTwoPhotos}
                  firstPhotoUrl={item.firstPhotoUrl}
                  secondPhotoUrl={item.secondPhotoUrl}
                  videoUrl={item.videoUrl}
                  hasLikedByMe={item.hasLikedByMe}
                  hasSavedByMe={item.hasLikedByMe}
                  numberOfLikes={item.numberOfLikes}
                  time={item.time}
                  description={item.description}
                />
              );
            }}
          />
        );
        break;
      }
      case 2: {
        return (
          <View>
            <SearchComponent />
          </View>
        );
        break;
      }
      case 3: {
        return (
          <View style={{alignItems: 'center', marginTop: 150}}>
            <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>Profil</Text>
            <Text style={{fontSize: 30, color: 'black'}}>Alanı, Case İçerisinde</Text>
            <Text style={{fontSize: 30, color: 'black'}}>Gereksiz Olup</Text>
            <Text style={{fontSize: 30, color: 'black'}}>Sonrasında Yapılacaktır.</Text>
          </View>
        );
        break;
      }
      case 4: {
        return (
          <View style={{alignItems: 'center', marginTop: 150}}>
            <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>Post Paylaşım</Text>
            <Text style={{fontSize: 30, color: 'black'}}>Alanı, Case İçerisinde</Text>
            <Text style={{fontSize: 30, color: 'black'}}>Gereksiz Olup</Text>
            <Text style={{fontSize: 30, color: 'black'}}>Sonrasında Yapılacaktır.</Text>
          </View>
        );
        break;
      }
      case 5: {
        return (
          <View style={{alignItems: 'center', marginTop: 150}}>
            <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>Beğeni ve Bildirimler</Text>
            <Text style={{fontSize: 30, color: 'black'}}>Alanı, Case İçerisinde</Text>
            <Text style={{fontSize: 30, color: 'black'}}>Gereksiz Olup</Text>
            <Text style={{fontSize: 30, color: 'black'}}>Sonrasında Yapılacaktır.</Text>
          </View>
        );
        break;
      }
    }
  }

  function goHome() {
    setSelectedSection(1);
    console.log(homeMockData[0])
  }
  function goSearch() {
    setSelectedSection(2);
  }
  function goProfile() {
    setSelectedSection(3);
  }
  function goSharePost() {
    setSelectedSection(4);
  }
  function goLikes() {
    setSelectedSection(5);
  }

  return (
      <SafeAreaView style={{backgroundColor: 'white'}}>
        <View style={{borderBottomWidth: 1, borderBottomColor: 'grey', height: '7%'}}>
          <Header
            selectedSection={selectedSection}
            goLikes={() => goLikes()}
            goSharePost={() => goSharePost()} />
        </View>
        <View style={{height: '92%', marginHorizontal: 20}}>
          {renderTabs()}
        </View>
        <View style={{position: 'absolute', left: 0, right:0, bottom:0, height: '7%'}}>
          <Footer
            selectedSection={selectedSection}
            goHome = {() => goHome()}
            goSearch = {() => goSearch()}
            goProfile = {() => goProfile()}/>
        </View>
      </SafeAreaView>
  );
};

export default Home;
