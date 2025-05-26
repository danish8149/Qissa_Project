import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import CheckBox from 'react-native-check-box';
import stylesLogin from './login-style';
import stylesSingup from './singup-style';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
const LoginScreen = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={stylesLogin.container}>
      <ImageBackground
        source={require('../assest/Skyline.png')}
        style={stylesLogin.header}
        resizeMode="cover">
        <Text style={stylesLogin.logo}>Qissa</Text>
        <Text style={stylesLogin.title}>Get Started Now</Text>
        <Text style={stylesLogin.subtitle}>
          Create an account or log in to explore more wonders.
        </Text>
      </ImageBackground>

      <View style={stylesLogin.card}>
        <View style={stylesLogin.form}>
          <View style={stylesLogin.toggleButtons}>
            <TouchableOpacity
              style={[
                activeTab === 'login'
                  ? stylesLogin.toggleActive
                  : stylesLogin.toggleInactive,
              ]}
              onPress={() => setActiveTab('login')}>
              <Text style={stylesLogin.toggleTextActive}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                activeTab === 'singup'
                  ? stylesLogin.toggleActive
                  : stylesLogin.toggleInactive,
              ]}
              onPress={() => setActiveTab('singup')}>
              <Text style={stylesLogin.toggleTextInactive}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          {/* //////////// Login Screen //////////////////////// */}
          {activeTab === 'login' ? (
            <View>
              <Text style={stylesLogin.label}>Email</Text>
              <TextInput
                placeholder="eg. abc@xyz.com"
                style={stylesLogin.input}
                placeholderTextColor="#aaa"
              />

              <Text style={stylesLogin.label}>Password</Text>
              <TextInput
                placeholder="Enter password"
                secureTextEntry
                style={stylesLogin.input}
                placeholderTextColor="#aaa"
              />

              <View style={stylesLogin.rememberRow}>
                <View style={stylesLogin.checkboxRow}>
                  {/* <CheckBox value={false} /> */}
                  <CheckBox />

                  <Text style={stylesLogin.rememberText}>Remember Me</Text>
                </View>
                <TouchableOpacity>
                  <Text style={stylesLogin.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={stylesLogin.loginButton}>
                <Text style={stylesLogin.loginButtonText}>Log In</Text>
              </TouchableOpacity>
            </View>
          ) : (
            // /////////////////// Sing Up Screen ////////////////////////
            // <View>
            //   <Text>aaaaaa</Text>
            // </View>

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
                onChangeText={setEmail}
                autoCapitalize="none"
              />

              <Text style={stylesSingup.label}>Password</Text>
              <TextInput
                style={stylesSingup.input}
                placeholder="Enter password"
                placeholderTextColor="#999"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />

              <TouchableOpacity style={stylesSingup.signupBtn}>
                <Text style={stylesSingup.signupBtnText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
