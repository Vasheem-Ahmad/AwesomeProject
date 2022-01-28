import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, TextInput, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

function SignUpScreen({navigation}) {
    return (
        <ScrollView>
            <View style = {styles.formwrapper}>
                <View style = {styles.imgsec}>
                    <Text style={{ fontSize: 22, fontWeight: '600', color: "#fff", textAlign: "left", }}>
                        Create Account
                    </Text>
                </View>

                <Animatable.View animation="fadeInUp" style = {styles.textsec}>
                    <View style = {styles.inputcover}>
                        <Text style = {styles.inputlabel}>Email <Text style = {styles.important}>*</Text></Text>
                        <View style = {styles.inputiconcover}>
                            <FontAwesome5 name={'envelope'} size={12} color="#ccc"></FontAwesome5>
                            <TextInput style = {styles.input}
                            placeholder = "Enter your email" placeholderTextColor = "#ccc"/>
                        </View>
                    </View>

                    <View style = {styles.inputcover}>
                        <Text style = {styles.inputlabel}>Mobile <Text style = {styles.important}>*</Text></Text>
                        <View style = {styles.inputiconcover}>
                            <FontAwesome5 name={'eye'} size={12} color="#ccc"></FontAwesome5>
                            <TextInput style = {styles.input}
                            placeholder = "Enter mobile number" placeholderTextColor = "#ccc" />
                        </View>
                    </View>

                    <View style = {styles.inputcover}>
                        <Text style = {styles.inputlabel}>Date Of Birth <Text style = {styles.important}>*</Text></Text>
                        <View style = {styles.inputiconcover}>
                            <FontAwesome5 name={'eye'} size={12} color="#ccc"></FontAwesome5>
                            <TextInput style = {styles.input}
                            placeholder = "Enter your date of birth" placeholderTextColor = "#ccc" />
                        </View>
                    </View>

                    <View style = {styles.inputcover}>
                        <Text style = {styles.inputlabel}>Password <Text style = {styles.important}>*</Text></Text>
                        <View style = {styles.inputiconcover}>
                            <FontAwesome5 name={'eye'} size={12} color="#ccc"></FontAwesome5>
                            <TextInput style = {styles.input}
                            placeholder = "Enter password" placeholderTextColor = "#ccc" />
                        </View>
                    </View>

                    <View style = {styles.inputcover}>
                        <Text style = {styles.inputlabel}>Confirm Password <Text style = {styles.important}>*</Text></Text>
                        <View style = {styles.inputiconcover}>
                            <FontAwesome5 name={'eye'} size={12} color="#ccc"></FontAwesome5>
                            <TextInput style = {styles.input}
                            placeholder = "Enter confirm password" placeholderTextColor = "#ccc" />
                        </View>
                    </View>

                    <TouchableOpacity style = {styles.submitButton} onPress = {() => navigation.navigate('LogInScreen')}>
                        <LinearGradient colors={[ '#008060', '#008060' ]} style = {styles.gradbtn}>
                            <Text style = {styles.submitButtonText}> Submit </Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.submitButton} onPress = {() => navigation.navigate('LogInScreen')}>
                        <View style = {styles.gradbtn}>
                            <Text style = {[styles.submitButtonText, styles.textgreen]}> Sign In </Text>
                        </View>
                    </TouchableOpacity>
                </Animatable.View>
            </View>
        </ScrollView>
    );
}

export default SignUpScreen;

const styles = StyleSheet.create ({
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
        flex: 3,
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
        color: '#fff',
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