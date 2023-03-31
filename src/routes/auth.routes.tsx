import { createStackNavigator } from "@react-navigation/stack";

import { SignIn } from '../screens/SignIn/index';

const Stack = createStackNavigator()

export function AuthRoutes() {
  return(
      <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
  )
}