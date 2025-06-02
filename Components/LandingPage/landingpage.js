// App.js
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Pressable,
} from 'react-native';
import LoginScreen from '../Login.Singup/Login&Singup';
import styles from './landingpage-style';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const LandingPage = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    console.log('Discover More pressed');
    // navigation logic or linking can go here
    navigation.navigate('Login');
    // <LoginScreen/>
  };

  return (
    <ImageBackground
      source={require('../assets/landing.png')}
      style={styles.container}
      resizeMode="cover">
      <LinearGradient
        colors={['#00627B00', '#0391B5', '#0391B5']}
        style={styles.gradient}
      />

      <View style={styles.overlay}>
        {/* <Text style={styles.logo}>Qissa</Text> */}
        <View style={styles.logo}>
          <ImageBackground
            source={require('../assets/logo.png')}
            // resizeMode='cover'
            style={styles.logoimage}></ImageBackground>
        </View>
        <Text style={styles.title}>Unveil Travel Wonders with Audio</Text>
        <Text style={styles.subtitle}>Begin an Unforgettable Journey</Text>

        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Discover More</Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>
          By joining us, you agree to{' '}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('https://yourapp.com/terms')}>
            Terms & Conditions
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

export default LandingPage;
