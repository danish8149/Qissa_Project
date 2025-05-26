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
  //   const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const validateEmail = email => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const handleSend = () => {
    if (!email) {
      Alert.alert('Error', 'Email is required');
    } else if (!validateEmail(email)) {
      Alert.alert('Error', 'Enter a valid email address');
    } else {
      // Call your API or navigate
      Alert.alert('Success', 'Verification code sent to your email');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={stylesForgotPassword.container}>
        <LinearGradient
          colors={['#DDF6FF', '#ffffff']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={stylesForgotPassword.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            {/* <Icon name="arrow-back" size={24} color="#000" /> */}
            <ImageBackground
              source={require('../assest/backsp.png')}
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
        </LinearGradient>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ForgotPasswordScreen;
