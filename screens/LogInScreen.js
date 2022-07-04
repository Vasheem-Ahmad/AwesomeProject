import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView, TextInput, StyleSheet, KeyboardAvoidingView, Platform, SafeAreaView, } from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import {Picker} from '@react-native-picker/picker';

const LogInScreen = ({navigation}) => {
    const [selectedLanguage, setSelectedLanguage] = useState();

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior='position'>
                <ScrollView style={{backgroundColor:'#fff'}}>
                    <View style = {styles.formwrapper}>
                        <View style = {styles.imgsec}>
                            <Text style={{ fontSize: 22, fontWeight: '600', color: "#fff", textAlign: "left", }}>
                                Please login here!
                            </Text>
                        </View>

                        <Animatable.View animation="fadeInUp" style = {styles.textsec}>
                            <View style = {styles.inputcover}>
                                <Text style = {styles.inputlabel}>Email <Text style = {styles.important}>*</Text></Text>
                                <View style = {styles.inputiconcover}>
                                    <FontAwesome5 name={'envelope'} size={12} color="#ccc"></FontAwesome5>
                                    <TextInput style = {styles.input} autoCompleteType='email'
                                    placeholder = "Email" placeholderTextColor = "#ccc"/>
                                </View>
                            </View>

                            <View style = {styles.inputcover}>
                                <Text style = {styles.inputlabel}>Password <Text style = {styles.important}>*</Text></Text>
                                <View style = {styles.inputiconcover}>
                                    <FontAwesome5 name={'eye'} size={12} color="#ccc"></FontAwesome5>
                                    <TextInput style = {styles.input} secureTextEntry={true} keyboardType='numeric'
                                    placeholder = "Password" placeholderTextColor = "#ccc" />
                                </View>
                            </View>

                            <View style = {styles.inputcover}>
                                <Text style = {styles.inputlabel}>Select Course <Text style = {styles.important}>*</Text></Text>
                                <View style = {styles.selectcover}>
                                    <Picker style = {{ color: '#ccc' }}
                                        selectedValue={selectedLanguage}
                                        onValueChange={(itemValue, itemIndex) =>
                                            setSelectedLanguage(itemValue)
                                        }>
                                        <Picker.Item style={styles.selectinput} label="Java" value="java" />
                                        <Picker.Item style={styles.selectinput} label="JavaScript" value="js" />
                                    </Picker>
                                </View>
                            </View>

                            <TouchableOpacity style = {styles.submitButton} onPress = {() => navigation.navigate('Dashboard')}>
                                <LinearGradient colors={[ '#008060', '#008060' ]} style = {styles.gradbtn}>
                                    <Text style = {styles.submitButtonText}> Sign In </Text>
                                </LinearGradient>
                            </TouchableOpacity>

                            <TouchableOpacity style = {styles.submitButton} onPress = {() => navigation.goBack()}>
                                <View style = {styles.gradbtn}>
                                    <Text style = {[styles.submitButtonText, styles.textgreen]}> Sign Up </Text>
                                </View>
                            </TouchableOpacity>
                        </Animatable.View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default LogInScreen;

const styles = StyleSheet.create ({
    container: {
        // flex: 1,
        // height: '100%',
        // width: '100%',
    },
    formwrapper: {
        backgroundColor: '#008060',
        textAlign: 'center',
        flex: 1,
    },
    imgsec: {
        flex: 1,
        paddingVertical: 50, 
        paddingHorizontal: 20,
    },
    textsec: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopEndRadius: 25,
        paddingHorizontal: 20,
        paddingVertical: 50,
    },
    inputcover: {
        marginVertical: 5,
    },
    inputlabel: {
        color: '#000',
        fontSize: 10,
        fontWeight: '600',
        marginBottom: 5,
    },
    important: {
        color: 'red',  
    },
    inputiconcover: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 3,
        paddingHorizontal: 10,
    },
    input: {
        color: '#000',
        fontSize: 10,
        paddingVertical: 3,
        paddingHorizontal: 7,
        width: '100%',
    },
    selectcover: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 3,  
    },
    selectinput: {
        color: '#000',
        fontSize: 12,
        width: '100%',
    },
    submitButton: {
        borderRadius: 3,
        width: '100%',
        marginTop: 15,
        borderWidth: 1.5,
        borderColor: '#008060',
    },
    gradbtn: {
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    submitButtonText: {
        color: "#fff",
        fontSize: 12,
        letterSpacing: 0.5,
        fontWeight: '600',
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    textgreen: {
        color: '#008060',
    },
})