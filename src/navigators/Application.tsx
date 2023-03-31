import React from 'react';
import { SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {MainNavigator} from './Main';
import { useFlipper } from '@react-navigation/devtools';
import { ApplicationStackParamList } from '../../@types/navigation';
import { SignIn } from '../screens/SignIn/index';
import { AuthRoutes } from '../routes/auth.routes';
import { AppRoutes } from '../routes/app.routes';
import { Routes } from '../routes';
import { AuthProvider } from '../contexts/authContext';

const Stack = createStackNavigator<ApplicationStackParamList>();

// @refresh reset
const ApplicationNavigator = () => {

  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1d1d2e' }}>
      <NavigationContainer ref={navigationRef}>
        <AuthProvider>
       <Routes/>
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default ApplicationNavigator;
