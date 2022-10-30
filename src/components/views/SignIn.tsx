import React, {useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BlueButton from '../customComponents/buttons';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [invalid,setInvalid] = useState(false);
  const navigation = useNavigation();
  
  function login() {
    navigation.navigate('Login');
  }

  function signIn() {
    navigation.navigate('Home');
  }

  return (
    <View style={{backgroundColor: 'white'}}>
        <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 90,
                backgroundColor: 'white',
                marginHorizontal: 40,
                marginBottom: 400}}>
            <Image source={require('../../assets/images/insta.png')} style={{height: 220, width: 440, marginRight: 10}}/>
            <Text style={{color: 'grey', fontWeight: 'bold'}}>Arkadaşlarının fotoğraf ve </Text>
            <Text style={{color: 'grey', fontWeight: 'bold', marginBottom: 10}}>videolarını görmek için kaydol.</Text>
            <View style={{borderRadius: 5, marginTop: 2, backgroundColor: 'lightgray', width: '100%', height: 45, justifyContent: 'center'}}>
                <TextInput
                    multiline={false}
                    style={{marginLeft: 10}}
                    onChangeText={(text) => {
                        setEmail(text);
                    }}
                    value={email}
                    placeholder={'E-posta'}
                    placeholderTextColor={'#484848'}
                />
            </View>
            <View style={{borderRadius: 5, marginTop: 5, backgroundColor: 'lightgray', width: '100%', height: 45, justifyContent: 'center'}}>
                <TextInput
                    multiline={false}
                    style={{marginLeft: 10}}
                    onChangeText={(text) => {
                        setName(text);
                    }}
                    value={name}
                    placeholder={'Adı Soyadı'}
                    placeholderTextColor={'#484848'}
                />
            </View>
            <View style={{borderRadius: 5, marginTop: 5, backgroundColor: 'lightgray', width: '100%', height: 45, justifyContent: 'center'}}>
                <TextInput
                    multiline={false}
                    style={{marginLeft: 10}}
                    onChangeText={(text) => {
                        setUserName(text);
                    }}
                    value={userName}
                    placeholder={'Kullanıcı Adı'}
                    placeholderTextColor={'#484848'}
                />
            </View>
            <View style={{borderRadius: 5, marginTop: 5, backgroundColor: 'lightgray', width: '100%', height: 45, justifyContent: 'center'}}>
                <TextInput
                    multiline={false}
                    style={{marginLeft: 10}}
                    onChangeText={(text) => {
                        setPassword(text);
                    }}
                    value={password}
                    placeholder={'Şifre'}
                    placeholderTextColor={'#484848'}
                />
            </View>
            <View style={{width: '100%'}}>
              <BlueButton 
                title = 'Kaydol'
                onPress = {() =>signIn()}
                disabled = {invalid}
              /> 
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15}}>
                <Image source={require('../../assets/images/line.png')} style={{flex: 1}}/>
                <Text>  YA DA  </Text>
                <Image source={require('../../assets/images/line.png')} style={{flex: 1}}/>
            </View>
            <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center'}}>
                <Text>Hesabın var mı?</Text>
                <TouchableOpacity
                    style={{marginLeft: 5}}
                    activeOpacity={0.8}
                    onPress={() => login()}>
                    <Text style={{color: 'dodgerblue', fontWeight: 'bold'}}>Giriş yap</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
};

export default SignIn;
