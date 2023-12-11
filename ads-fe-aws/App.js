import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

import { Amplify } from "aws-amplify";
import awsExports from "./src/aws-exports";

import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";
Amplify.configure(awsExports);

function SignOutButton() {
  const { signOut } = useAuthenticator();
  return <Button title="Sign Out" onPress={signOut} />;
}

export default function App() {
  return (
    <Authenticator.Provider>
      <Authenticator>
        <View style={styles.container}>
          <Text>Check you App.js file</Text>
          <SignOutButton />
        </View>
      </Authenticator>
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
