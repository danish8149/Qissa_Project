
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import LinearGradient from 'react-native-linear-gradient';
import stylesLogin from './login-style';
import stylesSingup from './singup-style';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Home');
  };
  const handleSignup = () => {
    if (validateSignup()) {
      navigation.navigate('Interest');
    }
  };
  const handleLogin = () => {
    if (validateLogin()) {
      navigation.navigate('Interest');
    }
  };
  const handleForgot = () => {
    navigation.navigate('ForgotPassword');
  };

  const validateLogin = () => {
    const newErrors = {};
    if (!email.trim()) newErrors.email = 'Email is required';
    if (!password.trim()) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateSignup = () => {
    const newErrors = {};
    if (!fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    if (!password.trim()) newErrors.password = 'Password is required';
    else if (password.length < 6)
      newErrors.password = 'Password must be at least 6 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <View style={{flex: 1}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps="handled">
          <View style={stylesLogin.container}>
            <ImageBackground
              source={require('../assest/login.png')}
              style={stylesLogin.header}
              resizeMode="cover"
              blurRadius={31}>
              <View style={stylesLogin.logoContainer}>
                <Image
                  source={require('../assest/logo.png')}
                  style={stylesLogin.logo}
                  resizeMode="contain"
                />
              </View>
              <Text style={stylesLogin.title}>Get Started Now</Text>
              <Text style={stylesLogin.subtitle}>
                Create an account or log in to explore more wonders.
              </Text>
            </ImageBackground>

            <View style={stylesLogin.card}>
              <LinearGradient
                colors={['#D0F6FD', '#FFFFFF', '#FFFFFF']}
                style={stylesLogin.gradiant}>
                <View style={stylesLogin.form}>
                  <View style={stylesLogin.toggleButtons}>
                    <TouchableOpacity
                      style={[
                        activeTab === 'login'
                          ? stylesLogin.toggleActive
                          : stylesLogin.toggleInactive,
                      ]}
                      onPress={() => setActiveTab('login')}>
                      <Text
                        style={[
                          activeTab === 'login'
                            ? stylesLogin.toggleTextActive
                            : stylesLogin.toggleTextInactive,
                        ]}>
                        Log In
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        activeTab === 'singup'
                          ? stylesLogin.toggleActive
                          : stylesLogin.toggleInactive,
                      ]}
                      onPress={() => setActiveTab('singup')}>
                      <Text
                        style={[
                          activeTab === 'singup'
                            ? stylesLogin.toggleTextActive
                            : stylesLogin.toggleTextInactive,
                        ]}>
                        Sign Up
                      </Text>
                    </TouchableOpacity>
                  </View>

                  {activeTab === 'login' ? (
                    <View>
                      <Text style={stylesLogin.label}>Email</Text>
                      <TextInput
                        placeholder="eg. abc@xyz.com"
                        style={stylesLogin.input}
                        placeholderTextColor="#aaa"
                        value={email}
                        onChangeText={text => {
                          setEmail(text);
                          if (errors.email) setErrors({...errors, email: ''});
                        }}
                        autoCapitalize="none"
                        keyboardType="email-address"
                      />
                      {errors.email && (
                        <Text
                          style={{color: 'red', fontSize: 12, marginTop: 4}}>
                          {errors.email}
                        </Text>
                      )}
                      <Text style={stylesLogin.label}>Password</Text>
                      <TextInput
                        placeholder="Enter password"
                        secureTextEntry
                        style={stylesLogin.input}
                        placeholderTextColor="#aaa"
                        value={password}
                        onChangeText={text => {
                          setPassword(text);
                          if (errors.password)
                            setErrors({...errors, password: ''});
                        }}
                      />
                      {errors.password && (
                        <Text
                          style={{color: 'red', fontSize: 12, marginTop: 4}}>
                          {errors.password}
                        </Text>
                      )}
                      <View style={stylesLogin.rememberRow}>
                        <View style={stylesLogin.checkboxRow}>
                          <CheckBox
                            style={stylesLogin.checkBox}
                            value={isChecked}
                            onValueChange={setIsChecked}
                            tintColors={{true: '#0391B5', false: '#0391B529'}}
                          />
                          <Text style={stylesLogin.rememberText}>
                            Remember Me
                          </Text>
                        </View>
                        <TouchableOpacity onPress={handleForgot}>
                          <Text style={stylesLogin.forgotText}>
                            Forgot Password?
                          </Text>
                        </TouchableOpacity>
                      </View>

                      <TouchableOpacity
                        style={stylesLogin.loginButton}
                        onPress={handleLogin}>
                        <Text style={stylesLogin.loginButtonText}>Log In</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={stylesLogin.guestButton}
                        onPress={handlePress}>
                        <Text style={stylesLogin.guestButtonText}>
                          Continue as Guest
                        </Text>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <View style={stylesSingup.form}>
                      <Text style={stylesSingup.label}>Full Name</Text>
                      <TextInput
                        style={stylesSingup.input}
                        placeholder="Enter Full Name"
                        placeholderTextColor="#999"
                        value={fullName}
                        onChangeText={setFullName}
                      />

                      <Text style={stylesSingup.label}>Email</Text>
                      <TextInput
                        style={stylesSingup.input}
                        placeholder="eg. abc@xyz.com"
                        placeholderTextColor="#999"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={text => {
                          setEmail(text);
                          if (errors.email) setErrors({...errors, email: ''});
                        }}
                        autoCapitalize="none"
                      />
                      {errors.email && (
                        <Text
                          style={{color: 'red', fontSize: 12, marginTop: 4}}>
                          {errors.email}
                        </Text>
                      )}
                      <Text style={stylesSingup.label}>Password</Text>
                      <TextInput
                        style={stylesSingup.input}
                        placeholder="Enter password"
                        placeholderTextColor="#999"
                        secureTextEntry
                        value={password}
                        onChangeText={text => {
                          setPassword(text);
                          if (errors.password)
                            setErrors({...errors, password: ''});
                        }}
                      />
                      {errors.password && (
                        <Text
                          style={{color: 'red', fontSize: 12, marginTop: 4}}>
                          {errors.password}
                        </Text>
                      )}
                      <TouchableOpacity
                        style={stylesSingup.signupBtn}
                        onPress={handleSignup}>
                        <Text style={stylesSingup.signupBtnText}>Sign Up</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={stylesLogin.guestButton}
                        onPress={handlePress}>
                        <Text style={stylesLogin.guestButtonText}>
                          Continue as Guest
                        </Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              </LinearGradient>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;
