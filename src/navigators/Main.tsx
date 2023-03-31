import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {SignIn } from '../screens/SignIn/index';
import { FinishOrder } from '../screens/FinishOrder';

const Tab = createBottomTabNavigator();

// @refresh reset
export const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="FinishOrder"
        component={FinishOrder}
        options={{
          tabBarIconStyle: { display: 'none' },
          tabBarLabelPosition: 'beside-icon',
        }}
      />
    </Tab.Navigator>
  );
};
