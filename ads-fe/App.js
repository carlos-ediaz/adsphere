import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native";
import React from "react";

import { Amplify } from "aws-amplify";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";

import awsExports from "./src/aws-exports";
Amplify.configure(awsExports);

function SignOutButton() {
  const { signOut } = useAuthenticator();
  return <Button title="Sign Out" onPress={signOut} />;
}

function App() {
  return (
    <Authenticator.Provider>
      <Authenticator>
        <View styles={StyleSheet.container}>
          <Text>Check you App.js file</Text>
          <SignOutButton />
        </View>
      </Authenticator>
    </Authenticator.Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
