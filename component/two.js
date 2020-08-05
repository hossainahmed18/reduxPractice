import * as React from 'react';
import { StyleSheet, Text, View, Alert, BackHandler,Button, FlatList} from 'react-native';

import { Router, Scene,Stack,Actions } from 'react-native-router-flux';

export default class TWo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          items:[
            {
              id:1,
              name:"aa"
            },
            {
              id:2,
              name:"bb"
            },
            {
              id:3,
              name:"cc"
            },
            {
              id:3,
              name:"dd"
            }
          ],

      value: '',
      list: ['a', 'b', 'c'],
      };
     
     
     
    }
    componentDidMount(){
      Actions.three()
    }

 



    onAddItem(){
      let ob={
        id:3,
        name:"ee"
      }
       this.state.items.push(ob)
       this.forceUpdate()
    }

    showArray(){
      return this.state.items.map((data,index)=>{
           return(
            <View>
                <Text key={index}>{data.name}</Text>
            </View>
           
           ) 
      })
    }

  
    render(){
      return (
        
        <View>
               
            <View> 
                <View>
                  {this.showArray()}
                  <Button onPress={()=>this.onAddItem()} title="ADD Item" style={styles.margin}> </Button>
                </View>    
            </View>
            <Button style={styles.container} onPress={()=>Actions.three()} title="Two"> </Button>
        </View>

            
      );
    }
    
  }

 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    margin:{
       marginBottom:20
    }
  });