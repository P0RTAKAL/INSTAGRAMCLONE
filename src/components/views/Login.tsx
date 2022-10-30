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

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [invalid, setInvalid] = useState(false);
    const navigation = useNavigation();

    function login() {
        navigation.navigate('Home');
    }

    function signIn() {
        navigation.navigate('SignIn')
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
                <View style={{borderRadius: 5, marginTop: 2, backgroundColor: 'lightgray', width: '100%', height: 45, justifyContent: 'center'}}>
                    <TextInput
                    multiline={false}
                    style={{marginLeft: 10}}
                    onChangeText={(text) => { 
                        setUserName(text);
                    }}
                    value={userName}
                    placeholder={'Kullanıcı Adı'}
                    placeholderTextColor={'#484848'}
                    inputAccessoryViewID="Bitti"
                    />
                </View>
                <View style={{borderRadius: 5, marginTop: 2, backgroundColor: 'lightgray', width: '100%', height: 45, justifyContent: 'center'}}>
                    <TextInput
                        multiline={false}
                        style={{
                            borderRadius: 5,
                            marginTop: 5,
                            marginLeft: 10,
                            backgroundColor: 'lightgray',
                        }}
                        onChangeText={(text) => { 
                            setPassword(text);
                        }}
                        value={password}
                        placeholder={'Şifre'}
                        placeholderTextColor={'#484848'}
                        inputAccessoryViewID="Bitti"
                    />
                </View>
                <View style={{width: '100%'}}>
                    <BlueButton 
                        title = 'Giriş Yap'
                        onPress = {() =>login()}
                        disabled = {invalid}
                    /> 
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15}}>
                    <Image source={require('../../assets/images/line.png')} style={{flex: 1}}/>
                    <Text>  YA DA  </Text>
                    <Image source={require('../../assets/images/line.png')} style={{flex: 1}}/>
                </View>
                <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center'}}>
                    <Text>Hesabın yok mu?</Text>
                    <TouchableOpacity
                    style={{marginLeft: 5}}
                    activeOpacity={0.8}
                    onPress={() => signIn()}>
                    <Text style={{color: 'dodgerblue', fontWeight: 'bold'}}>Kaydol</Text>
                </TouchableOpacity>
                </View>
            </View>
      </View>
    );
  };
  
  export default Login;
  
