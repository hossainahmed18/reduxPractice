import * as React from 'react';
import { StyleSheet, Text, View, Alert, BackHandler, Button, TouchableOpacity, ScrollView, TextInput } from 'react-native';

import { Actions } from 'react-native-router-flux';

import { connect } from 'react-redux'
import { buyCakes, cookCakes } from '../redux/actions/cakeActions'

class Cakes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cook: false,
            buy: false,
            cookNo: 0,
            buyNo: 0,
        };
    }
    componentDidMount() {
     
        
    }

    refresh() {
        this.setState({
            cook: false,
            buy: false,
            cookNo: 0,
            buyNo: 0,
        })
    }
    saveOrEdit() {
        if (this.state.cook == true) {
            this.props.cookCakes(this.state.cookNo)
            this.refresh()
        }
        if (this.state.buy == true) { 
            this.props.buyCakes(this.state.buyNo)
            this.refresh()
        }
    }

    render() {
        return (
            <ScrollView  >
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={styles.menuButtonStyles} onPress={() => Actions.menu()}><Text>Menu</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.menuButtonStyles} onPress={() => Actions.postOne()}><Text>PostOne</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.menuButtonStyles} onPress={() => Actions.postTwo()}><Text>PostTow </Text></TouchableOpacity>
                </View>

                 {
                    this.state.buy == true ?
                        <View style={{ marginTop: '10%', marginBottom: '2%', alignItems: 'center' }} >
                            <Text style={styles.inputHeader}>Buy: {this.state.buyNo}</Text>
                            <TextInput style={styles.textInput} onChangeText={(text) => this.setState({ buyNo: Number(text) })}></TextInput>
                            <TouchableOpacity style={styles.buttonStyles} onPress={() => this.saveOrEdit()}><Text>Buy</Text></TouchableOpacity>
                        </View>
                        :
                        <Text></Text>
                }
                {
                    this.state.cook == true ?
                        <View style={{ marginTop: '10%', marginBottom: '2%', alignItems: 'center' }} >
                            <Text style={styles.inputHeader}>Cook: {this.state.cookNo}</Text>
                            <TextInput style={styles.textInput} onChangeText={(text) => this.setState({ cookNo: Number(text) })}></TextInput>
                            <TouchableOpacity style={styles.buttonStyles} onPress={() => this.saveOrEdit()}><Text>Cook</Text></TouchableOpacity>
                        </View>
                        :
                        <Text></Text>
                }
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.AddbuttonStyles} onPress={() => this.setState({ buy: true,cook:false })}><Text>Start Buy</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.AddbuttonStyles} onPress={() => this.setState({ buy: false,cook:true})}><Text>Start Cook</Text></TouchableOpacity>

                </View>

            <Text style={{marginTop:'10%',marginLeft:'10%',fontSize:30}}>Current Number of Cakes:{this.props.numberOfCakes}</Text> 

            </ScrollView>
        );
    }

}
const mapStateToProps = state => {
    return {
        numberOfCakes: state.twoReducer.numberOfCakes
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonStyles: {
        backgroundColor: '#87cefa',
        marginTop: '5%',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000000',
        width: '20%',
        marginRight: '60%'

    },
    menuButtonStyles: {
        backgroundColor: '#87cefa',
        marginTop: '5%',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000000',
        width: '30%',
        marginLeft: '3%'

    },
    commonStyle: {
        backgroundColor: '#87cefa',
        marginTop: '2%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000000',
        paddingLeft: '5%'
    },
    AddbuttonStyles: {
        backgroundColor: '#87cefa',
        width: '20%',
        marginTop: '5%',
        marginLeft: '20%',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000000'
    },
    textInput: {
        marginBottom: '2%',
        borderWidth: 1,
        borderColor: '#000000',
        width: '90%',
        paddingLeft: '2%',
        marginLeft: '5%'
    },
    inputHeader: {
        marginBottom: '1%',
        marginLeft: '5%'
    },
});
export default connect(mapStateToProps, {buyCakes,cookCakes})(Cakes)
