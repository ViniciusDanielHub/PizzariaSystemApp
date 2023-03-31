import { createStackNavigator } from "@react-navigation/stack";
import { Dashboard } from "../screens/Dashboard";
import { FinishOrder } from "../screens/FinishOrder";
import { Order } from "../screens/Order";


export type StacKParamsList = {
  Dashboard: undefined;
  Order: {
    number: number | string;
    order_id: string;
  }
  FinishOrder: {
    number: number | string;
    order_id: string;
  }
}

const Stack = createStackNavigator<StacKParamsList>()

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      
      <Stack.Screen name="Dashboard" component={Dashboard} />

      <Stack.Screen name="Order" component={Order} />

      <Stack.Screen name="FinishOrder" component={FinishOrder} />

    </Stack.Navigator>
  )
}