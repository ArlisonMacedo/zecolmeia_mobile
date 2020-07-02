import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/Home";
import Points from "./pages/Points";
import Buy from "./pages/Buy";
import Register from "./pages/Register";
import Logon from "./pages/Logon";
import Requests from "./pages/Requests";

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: "#f0f0f5",
          },
        }}
      >
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Points" component={Points} />
        <AppStack.Screen name="Buy" component={Buy} />
        <AppStack.Screen name="Register" component={Register} />
        <AppStack.Screen name="Logon" component={Logon} />
        <AppStack.Screen name="Requests" component={Requests} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
