import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import stylesresetpassword from './resetpassword-style';
import LinearGradient from 'react-native-linear-gradient';
import {ImageBackground} from 'react-native';

const ResetPasswordScreen = () => {
  // const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Min 6 characters';

    if (!confirmPassword) newErrors.confirmPassword = 'Please confirm password';
    else if (password !== confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      Alert.alert('Success', 'Password has been reset!');
      // navigate or perform action here
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={stylesresetpassword.container}>
        {/* <View style={stylesresetpassword.topSection}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={stylesresetpassword.title}>Reset Password</Text>
      </View> */}

        <LinearGradient
          colors={['#DDF6FF', '#ffffff']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={stylesresetpassword.topSection}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ImageBackground
              source={require('../assest/backsp.png')}
              style={{height: 14, width: 20}}></ImageBackground>
          </TouchableOpacity>
          <Text style={stylesresetpassword.title}>Reset Password</Text>

          <View style={stylesresetpassword.form}>
            <Text style={stylesresetpassword.label}>New Password</Text>
            <TextInput
              placeholder="password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              style={stylesresetpassword.input}
              placeholderTextColor={'#12202580'}
            />
            {errors.password && (
              <Text style={stylesresetpassword.error}>{errors.password}</Text>
            )}

            <Text style={stylesresetpassword.label}>Confirm Password</Text>
            <TextInput
              placeholder="confirm password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              style={stylesresetpassword.input}
            />
            {errors.confirmPassword && (
              <Text style={stylesresetpassword.error}>
                {errors.confirmPassword}
              </Text>
            )}

            <TouchableOpacity
              style={stylesresetpassword.button}
              onPress={handleSubmit}>
              <Text style={stylesresetpassword.buttonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ResetPasswordScreen;
