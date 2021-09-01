import React from 'react'
import { View,Button, Text } from 'react-native'

export default function About({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{padding:30,}}>
           <Text style={{fontSize:20,fontWeight:'bold'}}>This is gallery app
      made  by using React Native and the api used for fetching images is from flickr
    </Text>
   </View>
        <Button color="coral"
        onPress={() => navigation.navigate('Home')} title="Go Back to Home" />
      </View>
    );
  }