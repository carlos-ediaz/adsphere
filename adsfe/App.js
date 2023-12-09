import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./screens/Welcome";
import SignIn from "./screens/SignIn";
import { Button } from "react-native-paper";

import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";
import { Amplify } from "aws-amplify";
import "react-native-url-polyfill/auto";
import "react-native-get-random-values";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

function SignOutButton() {
  const { signOut } = useAuthenticator();
  return <Button title="Sign Out" onPress={signOut} />;
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Authenticator.Provider>
      <Authenticator>
        <SignOutButton />
      </Authenticator>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Group>
            <Stack.Screen name="Sign In" component={SignIn} />
          </Stack.Group>
          <Stack.Group>
            <Stack.Screen name="Welcome" component={Welcome} />
          </Stack.Group>
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </Authenticator.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
