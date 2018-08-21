import React, { Component } from 'react';
import { Platform, StyleSheet, View, FlatList ,Text,Button, ScrollView} from 'react-native';
import Slideshow from 'react-native-slideshow';




export default class MainScreen extends Component {
  constructor(props){
    super(props);
  }

  render() {

    var people=[
      {
        "key": "001",
        "imageUrl":"http://placeimg.com/640/480/any" ,
        "name": "Banana",
        "Price": "Price: 3$"
    },
    ];
   
    return (
      
      <View  >
        
        
            <Slideshow 
              dataSource={[
                   { url:'http://placeimg.com/640/480/any' },
                   { url:'http://placeimg.com/640/480/any' },
                   { url:'http://placeimg.com/640/480/any' }
              ]}/>
           <View style={{paddingTop: 30}}>
             
                <FlatList  
                   data={people}
                    renderItem={
                      ({item=item}) =>
                     
                         <Text
                          style={{paddingTop: 20, paddingLeft: 30,fontSize: 20,height: 45,color:"black"}} > 
                         {item.name}
                         </Text>
                      
                        
                        } >
                   </FlatList> 
           </View>                     
           <View style={{paddingTop:70, paddingLeft:50, paddingRight:50, paddingBottom:5}}>
               <Button title="Check Out"/> 
           </View>
      
      </View>
    );
  }
}

    
  


