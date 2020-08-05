import * as React from 'react';
import { StyleSheet, Text, View, Alert, BackHandler,Button } from 'react-native';

import { Router, Scene,Stack,Actions } from 'react-native-router-flux';

export default class One extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

      };
    }
  
    render(){
      return (
        <Button style={styles.container} onPress={()=>Actions.two()} title="One">    
        </Button>
      );
    }
    
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
  