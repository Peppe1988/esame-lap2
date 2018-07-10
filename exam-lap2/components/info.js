import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Image,
  TextInput
  
} from 'react-native';
import { Constants } from 'expo';
import Swipeout from 'react-native-swipeout';
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
const TINT_COLOR = "rgb(4, 159, 239)";
import { StackNavigator, TabNavigator } from "react-navigation";



export default class info extends Component {
  state = {
    //todolist: todolist || [],
    
    array:{},
    num:1,
    sum:0,
     price:this.props.navigation.state.params.price
  };




  render() {

     
    const image=this.props.navigation.state.params.item         
     const name=this.props.navigation.state.params.name    
     const ing=this.props.navigation.state.params.ing
     const price=this.props.navigation.state.params.price
     

    return (
      <View style={styles.container}>
       
    
    
         

        <Image
              style={{
                
              marginLeft:10,          
              width:360,
              height:350,
              borderRadius: 2,
              borderWidth: 1,
        
              }}
              source={{ uri: image }}
            />

       <Text style={{textAlign:'right',fontSize:20,marginRight:10}}>€{price}</Text>
          
         <Text style={{textAlign:'center',fontSize:30,marginTop:10,  fontWeight: 'bold',}}>{name} </Text>

            <Text style={{marginLeft:10,marginTop:20,fontSize:15}}>{ing+"\t"+"\n"}</Text>



             
         <View style={{flexDirection: 'row',justifyContent:'center'}}>     
          
<Button
  
 onPress={()=>this.setState({num:this.state.num+1,sum:this.state.sum+this.state.price})}
  title="+"
  color="blue"
  size="40"
  
/>
      
    <Text style={{fontSize:30}}>{this.state.num}</Text>
<Button
  onPress={()=>this.setState({num:this.state.num-1,sum:this.state.sum-this.state.price})}
 

  title="-"
  color="blue"

/>

</View>
   
<Button
    
  style={{marginBottom:50,borderRadius:30,borderWidth:10}}
  
  title={"aggiungi al carrello    "+this.state.sum}
  color="blue"

    />





      </View>
    );
  }
}
          
          

const styles = StyleSheet.create({
   
/*
  list: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginLeft: 10,
    padding: 10,
  },
  */
 
});
