import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Alert,
  Keyboard,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
import stylesMyProfile from './myprofile-style';

const MyProfileScreen = () => {
  //   const navigation = useNavigation();
  const [name, setName] = useState('Mohammad Zubair');
  const [email, setEmail] = useState('zubair.mohammad@gmail.com');
  const [photo, setPhoto] = useState(null);

  const handleImagePick = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.didCancel) return;
      if (response.assets && response.assets.length > 0) {
        setPhoto(response.assets[0].uri);
      }
    });
  };

  const handleSave = () => {
    if (!name.trim() || !email.trim()) {
      Alert.alert('Validation Error', 'All fields are required.');
      return;
    }
    // You can post this data to your backend
    Alert.alert('Success', 'Profile updated successfully!');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={stylesMyProfile.container}>
        <LinearGradient
          colors={['#D0F6FD', '#FFFFFF']}
          // start={{ x: 0, y: 0 }}
          // end={{ x: 0, y: 1 }}
          style={stylesMyProfile.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            {/* <ImageBackground
              source={require('../assest/check_circle.png')}
              style={{height: 20, width: 20}}></ImageBackground> */}
          </TouchableOpacity>
          <Text style={stylesMyProfile.title}>My Profile</Text>

          <View style={stylesMyProfile.profileImageContainer}>
            <Image
              source={
                photo ? {uri: photo} : require('../../assest/food.png') // fallback image
              }
              style={stylesMyProfile.profileImage}
            />
            <TouchableOpacity
              style={stylesMyProfile.cameraIcon}
              onPress={handleImagePick}>
              <Icon name="camera" size={20} color="#00ADEF" />
            </TouchableOpacity>
          </View>

          <View style={stylesMyProfile.body}>
            <Text style={stylesMyProfile.label}>Full Name</Text>
            <TextInput
              style={stylesMyProfile.input}
              value={name}
              onChangeText={setName}
            />

            <Text style={stylesMyProfile.label}>Email</Text>
            <TextInput
              style={stylesMyProfile.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />

            <TouchableOpacity
              style={stylesMyProfile.saveButton}
              onPress={handleSave}>
              <Text style={stylesMyProfile.saveText}>Save</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MyProfileScreen;
