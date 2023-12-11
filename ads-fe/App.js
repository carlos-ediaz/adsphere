import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Amplify } from "aws-amplify";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";
import { AppRegistry } from "react-native";
import { PaperProvider } from "react-native-paper";

import awsExports from "./src/aws-exports";
import Home from "./screens/Home";

Amplify.configure(awsExports);

const Stack = createStackNavigator();

function App() {
  return (
    <Authenticator.Provider>
      <Authenticator>
        <PaperProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </Authenticator>
    </Authenticator.Provider>
  );
}
AppRegistry.registerComponent("main", () => App);

export default App;
