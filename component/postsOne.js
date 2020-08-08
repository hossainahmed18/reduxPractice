import * as React from 'react';
import { StyleSheet, Text, View, Alert, BackHandler,Button, TouchableOpacity, ScrollView, TextInput } from 'react-native';

import {Actions } from 'react-native-router-flux';

import {connect} from 'react-redux'
import { addPost,updatePost,fetchPosts } from '../redux/actions/postOneActions'

class PostOne extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         create:false,
         title:'',
         body:'',
         editItem:{},
         editing:false,
        

      };
    }
    componentDidMount(){
      if(this.props.posts.length==0){
         this.props.fetchPosts()
      }
        
    }

    setForEdit(data){
      this.setState({
        title:data.title,
        body:data.body,
        editItem:data,
        editing:true
       })
    }

    refresh(){
       this.setState({
        title:'',
        body:'',
        create:false,
        editing:false,
        editItem:{}
       })
    }
    saveOrEdit(){
       if(this.state.create==true){
         let postObject={
            title:this.state.title,
            body:this.state.body
         }
          this.props.addPost(postObject,this.props.posts)
          this.refresh()
       }
       if(this.state.editing==true){
        let postObject={
          title:this.state.title,
          body:this.state.body,
          id: this.state.editItem.id,
          userId: this.state.editItem.userId
       }
        this.props.updatePost(postObject,this.props.posts)
        this.refresh()
     }
    }
  
    render(){
      return (
        <ScrollView  >
          <View style={{ flexDirection: "row" }}>
          
            <TouchableOpacity style={styles.menuButtonStyles} onPress={() => Actions.postOne()}><Text>PostOne</Text></TouchableOpacity>
            <TouchableOpacity style={styles.menuButtonStyles} onPress={() => Actions.postTwo()}><Text>PostTow </Text></TouchableOpacity>
            <TouchableOpacity style={styles.menuButtonStyles} onPress={() => Actions.cakes()}><Text>Cakes </Text></TouchableOpacity>
          </View>
          
          {
            this.state.create == true || this.state.editing==true ?
              <View style={{ marginTop:'10%',marginBottom: '2%',alignItems:'center' }} onPress={() => Actions.one()}>
                
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
            this.props.posts.map((data,index)=>{
               return(
                 <TouchableOpacity style={styles.commonStyle} onLongPress={()=>this.setForEdit(data)}>
                    <Text>{data.id}</Text>
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
  const mapStateToProps= state=>{
      return{
        posts: state.oneReducer.posts
      }
  }
  const mapDispatchToProps=dispatch=>{
      return{
        fetchPosts:()=>dispatch(fetchPosts()),
        addPost:(data,items)=>dispatch(addPost(data,items)),
        updatePost:(data,items)=>dispatch(updatePost(data,items)),
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
  export default connect(mapStateToProps,mapDispatchToProps)(PostOne)
  