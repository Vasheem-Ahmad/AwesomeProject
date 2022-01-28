import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image, StyleSheet, Alert, Button } from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import { block } from 'react-native-reanimated';
import externalStyle from './ExternalStyle';

const Dashboard = ({navigation}) => (
    <ScrollView>
        <View style = {styles.formwrapper}>
            <View style = {styles.imgsec}>
                <Text style={{ fontSize: 20, fontWeight: '600', color: "#fff", textAlign: "left", }}>
                    Welcome, Vasheem <FontAwesome5 name={'smile'} size={22} color="yellow"></FontAwesome5>
                </Text>
            </View>

            <Animatable.View animation="fadeInUp" style = {styles.cardwrapper}>
                <Animatable.View animation="zoomIn" style = {styles.card}>
                    <Text style={styles.cardheader}>Attendance <FontAwesome5 name={'clipboard-list'} size={13} color="yellow"></FontAwesome5></Text>
                    <Text style = {styles.cardvalue}>95%</Text>
                    <Text style = {styles.cardstatus}>Attendance are good</Text>
                </Animatable.View>
                <Animatable.View animation="zoomIn" style = {styles.card}>
                    <Text style={styles.cardheader}>Leave's <FontAwesome5 name={'megaport'} size={13} color="yellow"></FontAwesome5></Text>
                    <Text style = {styles.cardvalue}>10/10</Text>
                    <Text style = {styles.cardstatus}>Pending leave's</Text>
                </Animatable.View> 

                <View style = {styles.card}>
                    <Image style = {styles.cardimg} source={require('../android/app/src/images/VE_Background_Image_Calls_2.png')} />
                    <Text style = {styles.cardtitle}>Welcome to the card board of team where everything is given in brief.</Text>
                    <Text style = {styles.cardbtn} onPress = {() => Alert.alert('Everthing is Good')}> Read More <FontAwesome5 name={'chevron-right'} size={9} color="#fff"></FontAwesome5></Text>
                </View>
                <View style = {styles.card}>
                    <Image style = {styles.cardimg} source={require('../android/app/src/images/Main-Banner.jpeg')} />
                    <Text style = {styles.cardtitle}>Welcome to the card board of team where everything is given in brief.</Text>
                    <Text style = {styles.cardbtn}> Read More <FontAwesome5 name={'chevron-right'} size={9} color="#fff"></FontAwesome5></Text>
                </View> 

                <TouchableOpacity style = {styles.submitButton} onPress = {() => navigation.navigate('Home')}>
                    <LinearGradient colors={[ '#008060', '#008060' ]} style = {styles.gradbtn}>
                        <Text style = {styles.submitButtonText}> Go Home </Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.submitButton} onPress = {() => navigation.goBack()}>
                    <View style = {styles.gradbtn}>
                        <Text style = {[styles.submitButtonText, styles.textgreen]}> Go Back </Text>
                    </View>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    </ScrollView>
)

export default Dashboard;

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
    cardwrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopEndRadius: 25,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    card: {
        width: '48%',
        borderWidth: 2,
        borderColor: '#008060',
        borderRadius: 8,
        overflow: 'hidden',
        marginVertical: 10,
    },
    cardheader: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600',
        backgroundColor: '#008060',
        paddingVertical: 6,
        paddingHorizontal: 10,
    },
    cardvalue: {
        color: '#000',
        fontSize: 30,
        fontWeight: '900',
        paddingTop: 5,
        paddingHorizontal: 10,
    },
    cardstatus: {
        color: '#008060',
        fontSize: 11,
        fontWeight: '900',
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    cardimg: {
        height: 80,
        width: '100%',
    },
    cardtitle: {
        color: '#000',
        fontSize: 11,
        paddingVertical: 8,
        paddingHorizontal: 10,
    },
    cardbtn: {
        color: '#fff',
        fontSize: 10,
        maxWidth: 85,
        backgroundColor: '#008060',
        marginHorizontal: 10,
        marginBottom: 10,
        padding: 5,
        borderRadius: 80,
        textAlign: 'center',
    },
    input: {
        color: '#000',
        fontSize: 10,
        paddingVertical: 3,
        paddingHorizontal: 7,
        width: '100%',
        resizeMode: 'cover',
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