import React from 'react';
import {Text} from 'react-native';

export default function App() {

  function getFullName(fName,mName,lName){
    return fName + " " + mName + " " + lName;
  }
  const pet = "Dog";
  return (
      <Text>
        {"\n\n\n\n\n\n\n"}
        Hello! I am a student in CIS340{"\n"}
        my full name is {getFullName("Caleb","Aldo","Jones")}{"\n"}
        I have a {pet}!
        
        </Text>

    
  );
}
