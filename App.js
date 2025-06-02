
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import your screens
import LandingPage from './Components/LandingPage/landingpage';
import LoginScreen from './Components/Login.Singup/Login&Singup';
import HomeScreen from './Components/Home/home';
import InterestScreen from './Components/interests/interests';
import ResetPasswordScreen from './Components/ResetPassword/resetpassword';
import ForgotPasswordScreen from './Components/ForgotPassword/forgotpassword';
import VerificationCodeScreen from './Components/VerificationCode/verficationcode';
import MyProfileScreen from './Components/Account/MyProfile/myprofile';
import SubscriptionScreen from './Components/Subscription/subscription';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Landing"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Landing" component={LandingPage} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Interest" component={InterestScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="VerificationCode" component={VerificationCodeScreen} />
        <Stack.Screen name="MyProfile" component={MyProfileScreen} />
        <Stack.Screen name="Subscription" component={SubscriptionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

