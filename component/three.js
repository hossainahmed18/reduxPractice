import * as React from 'react';
import { StyleSheet, Text, View, Alert, BackHandler,Button,ScrollView } from 'react-native';

import { Router, Scene,Stack,Actions } from 'react-native-router-flux';

export default class Three extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

        out:[
          {
            id:1,
            name:"aa",
            address:[
                {
                  house: "uu",
                  road: "vv"
                },
                {
                  house: "ww",
                  road: "xx"
               },
               {
                house: "yy",
                road: "zz"
               }
            ]
          },
          {
            id:2,
            name:"bb",
            address:[
                {
                  house: "oo",
                  road: "pp"
                },
                {
                  house: "qq",
                  road: "rr"
               },
               {
                house: "ss",
                road: "tt"
               }
            ]
          },
          {
            id:3,
            name:"cc",
            address:[
                {
                  house: "hh",
                  road: "jj"
                },
                {
                  house: "kk",
                  road: "ff"
               },
               {
                house: "gg",
                road: "ee"
               }
            ]
          }
        ]

      };
     
    }

  

    showArray(){
      return this.state.out.map((data,index)=>{
        return(
         <View style={styles.outButton}> 
             <Button title={data.name} > </Button>
            
             { this.showchild(data,index) }
         </View>
        
        ) 
       }) 
    }

    showchild(data,parentIndex){
      let parentindex=parentIndex
      let parent=data

      return data.address.map((data,index)=>{
        return(
          <View style={styles.inbutton}> 
              <Button title={data.house} onPress={()=>this.showFinal(index,parentindex,parent)}> </Button>
         </View>
        )
      })
    }
  
  showFinal(child,parentindex,parent){
      
      this.state.out[parentindex].address[child].house= "changed"+" "+child+" "+parent.name
      this.forceUpdate()
      
  }
    render(){
      return (

        <ScrollView>
          
             {this.showArray()}

             <View style={{marginTop:20}}>
                <Button style={styles.routeButton} onPress={()=>Actions.one()} title="Three">  
                </Button>
             </View>
            
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
    routeButton:{
      marginTop:30,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    outButton:{
       marginLeft:20,
       marginTop:10,
       width: 50
    },
    inbutton:{
      marginLeft:50,
       marginTop:10,
       width: 150
    }
    
  });