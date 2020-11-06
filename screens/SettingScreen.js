import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity,TextInput } from 'react-native';
import MyHeader from '../components/MyHeader';
import db from '../config';
import firebase from "firebase";


export default class SettingScreen extends Component{
    constructor(){
        super();
        this.state={
          emailId:'',
          password:'',
          firstName:'',
          lastName:'',
          address:'',
          contact:'',
          confirmPassword:'',
          isModalVisible:'false'
        }
      }

    render(){
        return(
            <View style = {styles.container}>
                <MyHeader title = "settings" navigation={this.props.navigation}>
                
                </MyHeader>
                <View>
                <TextInput
          style={styles.formTextInput}
          placeholder ={"First Name"}
          maxLength ={15}
          onChangeText={(text)=>{
            this.setState({
              firstName: text
            })
          }}
          value = {this.state.firstName}
        />

        <TextInput
          style={styles.formTextInput}
          placeholder ={"Last Name"}
          maxLength ={15}
          onChangeText={(text)=>{
            this.setState({
              lastName: text
            })
          }}
          value = {this.state.lastName}
        />

<TextInput
          style={styles.formTextInput}
          placeholder ={"Contact"}
          maxLength ={10}
          keyboardType={'numeric'}
          onChangeText={(text)=>{
            this.setState({
              contact: text
            })
          }}
          value = {this.state.contact}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Address"}
          multiline = {true}
          onChangeText={(text)=>{
            this.setState({
              address: text
            })
          }}
          value = {this.state.address}
        />
        <TouchableOpacity style = {styles.button}
        onPress = {()=>{this.updateUserDetails()}}>
                <Text style = {styles.buttonText}>
                    Save
                </Text>
        </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{flex:1,
    alignItems:"center",
justifyContent:"center"},
formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10
  },

  button:{ 
      width:"75%", 
      height:50, 
      justifyContent:'center',
       alignItems:'center', 
       borderRadius:10, 
       backgroundColor:"#ff5722", 
       shadowColor: "#000", 
       shadowOffset: {
            width: 0,
             height: 8, },
              shadowOpacity: 0.44, 
              shadowRadius: 10.32, 
              elevation: 16,
               marginTop:20 },

     buttonText:{ 
        fontSize:25, 
        fontWeight:"bold",
         color:"#fff" }
})