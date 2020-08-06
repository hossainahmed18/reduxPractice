import * as React from 'react';
import { StyleSheet, Text, View, Alert, BackHandler,Button, TouchableOpacity, ScrollView, TextInput } from 'react-native';

import {Actions } from 'react-native-router-flux';
import axios from 'axios';

export default class Posts extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         create:false,
         title:'',
         body:'',
         posts:[]

      };
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then((Response)=>{
             this.setState({
               posts:Response.data.slice(0,20)
             })
          })
          .catch((error)=>{
             console.log(error)
          })
    }
  
    render(){
      return (
        <ScrollView  >
          <Text style={{ marginBottom: '5%',fontSize:20,alignItems:'center' }}>Post One</Text>
          {
            this.state.create == false ?
              <View style={{ marginBottom: '2%',alignItems:'center' }} onPress={() => Actions.one()}>
                
                <Text style={styles.inputHeader}>Title: {this.state.title}</Text>
                <TextInput style={styles.textInput} onChangeText={(text) => this.setState({ title: text })} value={this.state.title}></TextInput>

                <Text style={styles.inputHeader}>Body: {this.state.body}</Text>
                <TextInput style={styles.textInput} onChangeText={(text) => this.setState({ body: text })} value={this.state.body}></TextInput>
                 <TouchableOpacity style={styles.buttonStyles}><Text>Save</Text></TouchableOpacity>
              </View>
              :
              <Text></Text>
          }
          <TouchableOpacity style={styles.AddbuttonStyles}><Text>Add Post</Text></TouchableOpacity>
          {
            this.state.posts.map((data,index)=>{
               return(
                 <View style={styles.commonStyle}>
                    <Text>{index}</Text>
                    <Text style={{fontSize:15}}>{data.title}</Text>
                    <Text style={{fontSize:10}}>{data.body}</Text>
                 </View>
               )
               
            })
          }

        </ScrollView>
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
        marginTop:'5%',
        alignItems: 'center',
        borderWidth:1,
        borderColor: '#000000',
        width:'20%',
        marginRight:'60%'

    },
    commonStyle:{
      backgroundColor:'#87cefa',
      marginTop:'2%',
      justifyContent:'center',
      alignItems: 'center',
      borderWidth:1,
      borderColor: '#000000',
      paddingLeft:'5%'
    },
    AddbuttonStyles:{
      backgroundColor:'#87cefa',
      width:'20%',
      marginTop:'5%',
      marginLeft:'70%',
      alignItems: 'center',
      borderWidth:1,
      borderColor: '#000000'
  },
    textInput:{
      marginBottom:'2%',
      borderWidth:1,
      borderColor: '#000000',
      width:'90%',
      paddingLeft:'2%',
      marginLeft:'5%'
    },
    inputHeader:{
      marginBottom:'1%',
      marginLeft:'5%'
    },
    


  });
  