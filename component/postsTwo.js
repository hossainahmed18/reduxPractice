import * as React from 'react';
import { StyleSheet, Text, View, Alert, BackHandler,Button, TouchableOpacity, ScrollView, TextInput } from 'react-native';

import {Actions } from 'react-native-router-flux';

import {connect} from 'react-redux'
import { sufflePost,deletePost } from '../redux/actions/postOneActions'

class PostTwo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
     };
    }
   
    setForDelete(data){
        this.props.deletePost(data.id)
    }

  
    render(){
      return (
          <ScrollView  >
              <View style={{ flexDirection: "row" }}>
                 
                  <TouchableOpacity style={styles.menuButtonStyles} onPress={() => Actions.postOne()}><Text>PostOne</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuButtonStyles} onPress={() => Actions.postTwo()}><Text>PostTow </Text></TouchableOpacity>
                  <TouchableOpacity style={styles.menuButtonStyles} onPress={() => Actions.cakes()}><Text>Cakes </Text></TouchableOpacity>
              </View>


              <View style={{ marginTop: '10%', marginBottom: '2%', alignItems: 'center', flexDirection: "row" }} >
                  <TouchableOpacity style={styles.menuButtonStyles} onPress={() => this.props.sufflePost(this.props.posts)}><Text>Suffle</Text></TouchableOpacity>
              </View>

            
              {
                  this.props.posts.map((data, index) => {
                      return (
                          <TouchableOpacity style={styles.commonStyle} onLongPress={() => this.setForDelete(data)}>
                              <Text>{data.id}</Text>
                              <Text style={{ fontSize: 15 }}>{data.title}</Text>
                              <Text style={{ fontSize: 10 }}>{data.body}</Text>
                          </TouchableOpacity>
                      )

                  })
              }

          </ScrollView>
      );
    }
    
  }
  const mapStateToProps= state=>{
      return{
        posts: state.oneReducer.posts
      }
  }
  const mapDispatchToProps=dispatch=>{
      return{
        sufflePost:(items)=>dispatch(sufflePost(items)),
        deletePost:(data,items)=>dispatch(deletePost(data,items)),
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
    menuButtonStyles:{
      backgroundColor:'#87cefa',
      marginTop:'5%',
      alignItems: 'center',
      borderWidth:1,
      borderColor: '#000000',
      width:'30%',
      marginLeft :'3%'

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
  export default connect(mapStateToProps,mapDispatchToProps)(PostTwo)
  