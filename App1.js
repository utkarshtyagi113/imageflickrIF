import React, { Component,useState,useEffect } from 'react';
import AsyncStorage  from '@react-native-async-storage/async-storage';
import {FlatList,StyleSheet, ActivityIndicator,View,Image,Button,TouchableOpacity,Text} from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Container, Header,Icon,Left, Body, Right, Title } from 'native-base';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import About from './About';
//let data = require('../Data.json')
//import  getFlickrImageURL from './Api'

function HomeScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=20&page=1&api_key=6f102c62f41998d151e5a1b48713cf13&format=json&nojsoncallback=1&extras=url_s')
      .then((response) => response.json())
      .then((json) => setData(json.photos.photo))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));

  }, []);
 
  return (

 
   <Container>

        <Header style={{backgroundColor:'white',borderBottomWidth:0.2,borderColor:'black ',marginBottom:-20}}>

 <TouchableOpacity 
   onPress={() => navigation.openDrawer()}
 >
<Icon 
 style={{padding:10}}
 name='menu' />
 </TouchableOpacity>
            
          
    
         
          <Body  style={{marginLeft:120,color:'black'}}>
            <Title style={{color:'black'}}>Gallery 
  </Title>
          </Body>
     
        </Header>
        <Text> </Text>
    
        <FlatList
        horizontal={false}
        numColumns={3}
        data={data}
        renderItem={({ item }) => (
           
        <TouchableOpacity
          
            onPress={() => navigation.navigate("GalleryPhoto",item)}
          >
                 <View style={{flex:1}}>
        
          <Image
                source={{ uri: item.url_s }}
                style={{ width: 140, height: 140 }}
          />

            </View>
          
          
          </TouchableOpacity>
        )}
      />
       </Container
       >
  );
}





const Drawer = createDrawerNavigator();

export default function App1({navigation}) {
  return (
  
      <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="About" component={About} />

  
      </Drawer.Navigator>
 
  );
}