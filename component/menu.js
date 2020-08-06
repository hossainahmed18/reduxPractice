import * as React from 'react';
import { StyleSheet, Text, View, Alert, BackHandler,Button, TouchableOpacity, ScrollView } from 'react-native';

import {Actions } from 'react-native-router-flux';

export default class Menu extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

      };
    }
  
    render(){
      return (
        <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#f0f8ff'}} >
            <TouchableOpacity style={styles.buttonStyles} onPress={()=>Actions.one()}>
                <Text>Check</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyles} onPress={()=>Actions.postsOne()}>
               <Text>Posts</Text>
            </TouchableOpacity>
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
    buttonStyles:{
        backgroundColor:'#87cefa',
        width:'50%',
        height:'20%',
        marginTop:'10%',
        justifyContent:'center',
        alignItems: 'center',
        borderWidth:1,
        borderColor: '#000000'

    }

  });
  