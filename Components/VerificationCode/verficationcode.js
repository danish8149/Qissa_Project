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
  //   const navigation = useNavigation();
  const [code, setCode] = useState(['', '', '', '']);
  const inputs = useRef([]);
  const [timer, setTimer] = useState(30);

  // Countdown logic
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
    if (code.some(char => char === '')) {
      Alert.alert('Error', 'Please enter the complete 4-digit code.');
    } else {
      const finalCode = code.join('');
      // Call verify API or next step
      Alert.alert('Success', `Code entered: ${finalCode}`);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={stylesVerificationCode.container}>
        <LinearGradient
          colors={['#DDF6FF', '#ffffff']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={stylesVerificationCode.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ImageBackground
              source={require('../assest/backsp.png')}
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

            <Text style={stylesVerificationCode.resendText}>
              Resend in {timer < 10 ? `0:0${timer}` : `0:${timer}`}
            </Text>
          </View>
        </LinearGradient>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default VerificationCodeScreen;
