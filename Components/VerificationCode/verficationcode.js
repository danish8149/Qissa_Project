import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  stylesVerificationCodeheet,
  Alert,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import stylesVerificationCode from './verificationcode-style';

const VerificationCodeScreen = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState(['', '', '', '']);
  const inputs = useRef([]);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => setTimer(prev => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (text, index) => {
    if (text.length > 1) return;
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
    if (text && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  const handleVerify = () => {
    // if (code.some(char => char === '')) {
    //   Alert.alert('Error', 'Please enter the complete 4-digit code.');
    // } else {
    //   const finalCode = code.join('');
    //   Alert.alert('Success', `Code entered: ${finalCode}`);
    // }
    navigation.navigate('ResetPassword');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={stylesVerificationCode.container}>
        <LinearGradient
          colors={['#D0F6FD', '#FFFFFF', '#FFFFFF']}
          style={stylesVerificationCode.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ImageBackground
              source={require('../assets/backsp.png')}
              style={{height: 14, width: 20}}></ImageBackground>
          </TouchableOpacity>
          <Text style={stylesVerificationCode.title}>Verification Code</Text>
          <Text style={stylesVerificationCode.subtitle}>
            Enter 4 digit verification code sent to your email id abc@gmail.com
          </Text>

          <View style={stylesVerificationCode.body}>
            <View style={stylesVerificationCode.codeContainer}>
              {code.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={el => (inputs.current[index] = el)}
                  style={stylesVerificationCode.codeInput}
                  keyboardType="numeric"
                  maxLength={1}
                  value={digit}
                  onChangeText={text => handleChange(text, index)}
                />
              ))}
            </View>

            <TouchableOpacity
              style={stylesVerificationCode.button}
              onPress={handleVerify}>
              <Text style={stylesVerificationCode.buttonText}>Verify</Text>
            </TouchableOpacity>

            {/* <Text style={stylesVerificationCode.resendText}>
              Resend in {timer < 10 ? `0:0${timer}` : `0:${timer}`}
            </Text> */}
            <TouchableOpacity
              onPress={() => {
                if (timer === 0) {
                  setTimer(30);
                  Alert.alert('Info', 'Verification code resent.');
                }
              }}
              disabled={timer !== 0}>
              <Text
                style={[
                  stylesVerificationCode.resendText,
                  {color: timer === 0 ? '#12202580' : '#aaa'},
                ]}>
                {timer === 0
                  ? 'Resend Code'
                  : `Resend in ${timer < 10 ? `0:0${timer}` : `0:${timer}`}`}
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default VerificationCodeScreen;
