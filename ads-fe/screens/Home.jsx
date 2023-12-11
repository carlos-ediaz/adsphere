// LogoutScreen.js
import React, { useState } from 'react';
import { Button, Text } from 'react-native';
import { useAuthenticator } from '@aws-amplify/ui-react-native';
import { putAd } from '../api/ads';

function LogoutScreen() {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const [ads, setAdds] = useState();

  const handleSignOut = async () => {
    try {
      signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  async function createAd() {
    try {
        const data=await putAd({
            title: "First created add",
            description: "Ad description from axios"
        })
        setAdds(data);
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <>
      <Text>Logout Screen</Text>
      <Text>{`Welcome ${JSON.stringify(user)}`}</Text>
      <Button title="See Adds" onPress={createAd} />
      {
        ads && 
        <Text>{JSON.stringify(ads)}</Text>
      }
      <Button title="Sign Out" onPress={handleSignOut} />
    </>
  );
}

export default LogoutScreen;
