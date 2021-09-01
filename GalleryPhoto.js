import React from 'react'
import { View, Text,Image } from 'react-native'
import { Container, Header,Button, Left, Body, Right, Title, Icon } from 'native-base';
export default function GalleryPhoto({navigation,route}) {
    
    
    const { url_s, title } = route.params;


    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <Container>
        <Header>

            
        <Button iconLeft transparent primary
        onPress={() => navigation.goBack()}
 >
        
            <Text style={{color:'white',marginLeft:10,fontSize:18}}>Back</Text>
          </Button>
       
          <Body style={{marginLeft:78}}>
            <Title>{JSON.stringify(title)}</Title>
          </Body>
     
        </Header>
          <Image
      
        source={{ uri: url_s }}
        style={{ width: 440, height: 540 }}
      />
           </Container>
        </View>
    
    )
}