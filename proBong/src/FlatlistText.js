import React, { Component } from 'react';
import { Platform, StyleSheet, View, FlatList ,Text,Button,Image, TouchableOpacity,Alert, Modal} from 'react-native';
import datalist from '../src/data/datalist';
import Slideshow from 'react-native-slideshow';
import Dialog from 'react-native-dialog';
import DialogInput from 'react-native-dialog-input';
import PopupDialog from 'react-native-popup-dialog';
class FlatItem extends Component{
    render(){
        return(
            <View 
                style={{flex:1, flexDirection: 'row',
                backgroundColor:'lightgreen' }}>

                <Image  source={{uri: this.props.item.imageUrl}}
                        style={{width:100, height:100, margin: 5}} >
                 </Image>
                <View style={{ flex:1, flexDirection: 'column'}}>
                <Text style={styles.flatlistItem}>  
                    {this.props.item.name}
                </Text>
                <Text style={styles.flatlistItem}> 
                    {this.props.item.Price}
                </Text>
                </View>
                <View style={{flex:1,  alignItems:'center', justifyContent:'center'}}>
                    <Button style={{width:170,marginTop:20,}}
                        color='limegreen'
                        title='Add to cart'
                        onPress={() =>  alert('You are already added to your cart')}>
                    </Button>
                </View>
            </View>
        )
    }
}

export default class FlatlistText extends Component{

    constructor(props) { 
        super(props);
        this.state = {   
            Alert_Visibility: false ,
             dataSource: [
                { url:'https://images.pexels.com/photos/57426/paprika-vegetables-colorful-food-57426.jpeg?auto=compress&cs=tinysrgb&h=350' },
                { url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnQBMmBjE9zpG_szEyj1Gq5XGcRaQ9sIWRa1-870UKXK5McaMi' },
                { url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt5WsU24D2cFZGZROmwmOFW0519u4Rs0i44axDq4dFsC-afqMY' },
                { url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd2VKbUKy9XwqkSLYoc7Yrg6Assy8alaZdmYpNuuSzMlD6-wAT' },
                { url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj47dInWMPs2Vd5SBpidK6CRf3USTTpmhS3vMwSxKXDfJH-ste8Q' },
                { url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP-maZji6r6ZxjgddcsHtGnvMXn7OqXy8WxR9IG2h79f-c-aXzRA' },
                { url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS-fAehl1-hhmI-jCbA8zBfw9FByPFPBQiDmaQiSJbVtVZjNIvTQ' },
                { url:'https://i.ndtvimg.com/i/2017-06/vegetables_696x400_61498804199.jpg' },
                { url:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vegetable-spaghetti-horizontal-1532031695.jpg?resize=480:*' },
                { url:'http://balartsubirana.com/wp-content/uploads/2016/01/Blog-Fruit-Vegetables-Market-Prices-2-848x380.jpg' }
              ]
        };
      }
      Show_Custom_Alert(visible) {
        this.setState({Alert_Visibility: visible});  
      }
      ok_Button=()=>{
        Alert.alert("OK Button Clicked.");
      }

     
  
    render(){
        return(
      <View style={{flex:2}}>
          
          <Slideshow 
              dataSource={this.state.dataSource}>
              </Slideshow>
         
         <View style ={{flex:1,marginTop:1}}>
         <FlatList 
            data={datalist}
            renderItem={({item, index})=>{  return( <FlatItem item={item} index={index}></FlatItem>); }} >
         </FlatList>
        </View>
        <View style={{paddingTop:5, paddingLeft:50, paddingRight:50, paddingBottom:5,backgroundColor:'lightgreen'}}>
         <Button color='seagreen'  title= "Check out"
            onPress={() => { this.Show_Custom_Alert(true) }}
         />
          
         </View>
            <Modal 
              visible={this.state.Alert_Visibility}
              transparent={false}
              animatinType={"slide"}
              onRequestClose={ () => { this.Show_Custom_Alert(!this.state.Alert_Visibility)} } >

                <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.Alert_Main_View}>
                        <Text style={styles.Alert_Title}>Custom Alert Dialog Title.</Text>
                        <Text style={styles.Alert_Title}>Custom Alert Dialog Title.</Text>

                        <View style={{ width: '100%', height: 2, backgroundColor: '#fff'}} />
                        <Text style={styles.Alert_Message}> Are You Sure(Alert Dialog Message). </Text>
                        <View style={{ width: '100%', height: 1, backgroundColor: '#fff'}} />

                        <View style={{flexDirection: 'row', height: '30%'}}>
                            <TouchableOpacity 
                                style={styles.buttonStyle}
                                onPress={this.ok_Button} 
                                activeOpacity={0.1}       >
                                <Text style={styles.TextStyle}> OK </Text>
                            </TouchableOpacity>

                            <View style={{ width: 1, height: '100%', backgroundColor: '#fff'}} />
                            <TouchableOpacity 
                                style={styles.buttonStyle} 
                                onPress={() => { this.Show_Custom_Alert(!this.state.Alert_Visibility)} } 
                                activeOpacity={0.1}   >
                                <Text style={styles.TextStyle}> CANCEL </Text>
                            </TouchableOpacity>
                      </View> 

                    </View>

                </View>
            </Modal>
     </View>
        )
    }

  
}

const styles= StyleSheet.create({
    flatlistItem:{
        color: 'black',
        padding: 10,
        fontSize: 25
    },
    MainContainer :{
        
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: (Platform.OS == 'ios') ? 20 : 0
        
    },
    Alert_Main_View:{
        
         alignItems: 'center',
         justifyContent: 'center',
         backgroundColor : "#009688", 
         
        
         borderWidth: 1,
         borderColor: '#fff',
         borderRadius:7,
        
       },
        
       Alert_Title:{
        
         fontSize: 25, 
         color: "#fff",
         textAlign: 'center',
         padding: 10,
        
        
       },
        
       Alert_Message:{
        
           fontSize: 22, 
           color: "#fff",
           textAlign: 'center',
           padding: 10,
           
          
         },
        
       buttonStyle: {
           
           width: '50%',
            marginTop: '10%',
         
           justifyContent: 'center',
           alignItems: 'center'
        
       },
          
       TextStyle:{
           color:'#fff',
           textAlign:'center',
           fontSize: 22,
           marginTop: -5
       }
    
})
