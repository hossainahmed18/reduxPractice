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
         editing:false,
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

    setForEdit(data){
      this.setState({
        title:data.title,
        body:data.body,
        editing:true
       })
    }

    refresh(){
       this.setState({
        title:'',
        body:'',
        create:false,
        editing:false
       })
    }
    saveOrEdit(){
       if(this.state.create==true){
          Alert.alert("inserting")
          this.refresh()
       }
       if(this.state.editing==true){
        Alert.alert("updating")
        this.refresh()
     }
    }
  
    render(){
      return (
        <ScrollView  >
          <Text style={{ marginBottom: '5%',fontSize:20,alignItems:'center' }}>Post One</Text>
          {
            this.state.create == true || this.state.editing==true ?
              <View style={{ marginBottom: '2%',alignItems:'center' }} onPress={() => Actions.one()}>
                
                <Text style={styles.inputHeader}>Title: {this.state.title}</Text>
                <TextInput style={styles.textInput} onChangeText={(text) => this.setState({ title: text })} value={this.state.title}></TextInput>

                <Text style={styles.inputHeader}>Body: {this.state.body}</Text>
                <TextInput style={styles.textInput} onChangeText={(text) => this.setState({ body: text })} value={this.state.body}></TextInput>
                 <TouchableOpacity style={styles.buttonStyles} onPress={()=>this.saveOrEdit()}><Text>Save</Text></TouchableOpacity>
              </View>
              :
              <Text></Text>
          }
          <TouchableOpacity style={styles.AddbuttonStyles} onPress={()=>this.setState({create:true})}><Text>Add Post</Text></TouchableOpacity>
          {
            this.state.posts.map((data,index)=>{
               return(
                 <TouchableOpacity style={styles.commonStyle} onLongPress={()=>this.setForEdit(data)}>
                    <Text>{index}</Text>
                    <Text style={{fontSize:15}}>{data.title}</Text>
                    <Text style={{fontSize:10}}>{data.body}</Text>
                 </TouchableOpacity>
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
  