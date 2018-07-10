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
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
const TINT_COLOR = 'rgb(4, 159, 239)';
import { StackNavigator, TabNavigator } from 'react-navigation';
import info from './components/info';

class App extends Component {
  state = {
    array: {},
    text:"",
    name:""
  };

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    const title = params.title ? params.title : 'Home';

    return {
      title: title,

      headerStyle: {
        backgroundColor: '#D26F30',
      },

      headerRight: <Button title="+" onPress={() => navigation.navigate('')} />,
    };
  };

  componentDidMount() {
    fetch('http://www.dmi.unict.it/~calanducci/LAP2/food.json')
      .then(response => response.json())
      .then(rep => {
        this.setState({ array: rep });
      });
  }


 search=(text)=>{

      this.state.array.data.map(todo=>{todo.name==text ? console.log(text):""})}



  renderrow = ({ item }) => (
    <View>
      {this.state.array ? (
        <TouchableHighlight  onPress={() => this.props.navigation.navigate('Info',{price:item.price,item:item.image,name:item.name,ing:item.ingredients})} >
          <View style={{ borderBottomWidth: 1, flexDirection: 'row' }}>
            <Image
              style={{
                marginLeft: 10,
                width: 100,
                borderRadius: 1,
                borderWidth: 1,
                height: 100,
                marginTop: 10,
              }}
              source={{ uri: item.image }}
            />

            <View>
              <Text style={{ marginLeft: 20, fontSize: 25, fontWeight: 'bold' }}>{item.name}</Text>

              <Text style={{ marginLeft: 10 }}>
                {item.ingredients[0]},{'\n'}
                {item.ingredients[1]},{'\n'}
                {item.ingredients[2]},{'\n'}
                {item.ingredients[3]}
              </Text>

              <Text style={{ marginLeft: 10, fontSize: 25 }}>
              
                 {'€'}{item.price}
               
              </Text>
            </View>

              <View />
   

            <Text
              style={{
                marginTop: 10,
                paddingLeft: 10,
                marginBottom: 30,
                width: 200,
              }}>
              {item.category}
            </Text>
          </View>
        </TouchableHighlight>
      ) : (
        ''
      )}
    </View>
  );

  keyex = (item, index) => index;

  render() {
    return (
<View>
 <TextInput
        style={{height: 35, borderColor: 'black', borderWidth: 2,borderRadius:10}}
        onChangeText={(text) => this.search(text)}
        value={this.state.text}
      />

      <FlatList
        data={this.state.array.data}
        renderItem={this.renderrow}
        keyExtractor={this.keyex}
      />

      </View>
    );
  }
}

const RootStack = StackNavigator({
  Home: {
    screen: App,
  },
  Info: {
    screen: info,
  },

  initialRouteName: 'Home',
});
export default RootStack;

