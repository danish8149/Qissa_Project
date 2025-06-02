import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  stylesForgotPasswordheet,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import stylesForgotPassword from './forgotpassword-style';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const validateEmail = email => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const handleSend = () => {
    // if (!email) {
    //   Alert.alert('Error', 'Email is required');
    // } else if (!validateEmail(email)) {
    //   Alert.alert('Error', 'Enter a valid email address');
    // } else {
    //   Alert.alert('Success', 'Verification code sent to your email');
    // }
    navigation.navigate('VerificationCode');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LinearGradient
          colors={['#D0F6FD', '#FFFFFF', '#FFFFFF']}
         style={stylesForgotPassword.container}
          >
            <View 
          style={stylesForgotPassword.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}
       >
            <ImageBackground
              source={require('../assets/backsp.png')}
              style={{height: 14, width: 20}}></ImageBackground>
          </TouchableOpacity>
          <Text style={stylesForgotPassword.title}>Forgot Password</Text>
          <Text style={stylesForgotPassword.subtitle}>
            Enter register email to receive the verification code
          </Text>

          <View style={stylesForgotPassword.body}>
            <Text style={stylesForgotPassword.label}>Enter Email</Text>
            <TextInput
              style={stylesForgotPassword.input}
              placeholder="eg. abc@xyz.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <TouchableOpacity
              style={stylesForgotPassword.button}
              onPress={handleSend}>
              <Text style={stylesForgotPassword.buttonText}>
                Send Verification Code
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={stylesForgotPassword.backLogin}>Back to Login</Text>
            </TouchableOpacity>
          </View>
          </View>
        </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

export default ForgotPasswordScreen;
