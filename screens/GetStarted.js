import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

   
const GetStarted = ({navigation}) => (
    <View style = {styles.formwrapper}>
        <View style = {styles.imgsec}>
            <Animatable.View animation="zoomIn" style = {styles.shadowbox}>
                <Image style={styles.userimg} source={require('../android/app/src/images/Shopify-Logo1.png')} />
            </Animatable.View>

            <Text style={{ fontSize: 12, fontStyle: "italic", color: "#fff", textAlign: "center", }}>
                World's best eCommerce plateform for selling products and for dropshipping.
            </Text>
        </View>

        <Animatable.View animation="fadeInUp" style = {styles.textsec}>
            <Text style={styles.headtext}>Welcome to the eComerce world</Text>
            <Text style={styles.titletext}>Stay connected with everyone</Text>
            <Text style={styles.subtitletext}>Sign in with account</Text>
            <TouchableOpacity style = {styles.submitButton}
            onPress = {() => navigation.navigate('SignUpScreen')}>
            <LinearGradient colors={['green', '#008060' ]} style = {styles.gradbtn}>
                <Text style = {styles.submitButtonText}> Get Started <FontAwesome5 name={'chevron-right'} size={11} color="#fff"></FontAwesome5></Text>
            </LinearGradient>
            </TouchableOpacity>
        </Animatable.View>
    </View>
);

export default GetStarted;

const styles = StyleSheet.create ({
    formwrapper: {
        backgroundColor: '#008060',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
    },
    imgsec: {
        flex: 2,
        padding: (40, 20, 20, 50), borderRadius: 50, 
    },
    shadowbox: {
        height: 150,
        width: 150,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderWidth: 5,
        borderColor: '#7bc527',
        borderRadius: 100, 
        marginBottom: 20,
        // shadowColor: "#000",
        // shadowOffset: { width: 0, height: 3, },
        // shadowOpacity: 0.29,
        // shadowRadius: 4.65,
        // elevation: 7,
    },
    userimg: {
        maxHeight: 150,
        maxWidth: 150,
    },
    textsec: {
        flex: 1.8,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopEndRadius: 25,
        paddingHorizontal: 50,
        paddingVertical: 50,
    },
    headtext: {
        color: '#008060',
        fontSize: 23,
        fontWeight: '900',
        lineHeight: 30,
        textAlign: 'left',
        marginBottom: 10,
    },
    titletext: {
        color: '#000',
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 30,
        textAlign: 'left',
    },
    subtitletext: {
        color: '#80827f',
        fontSize: 12,
        marginTop: 2,
        textAlign: 'left',
    },
    gradbtn: {
        borderRadius: 50,
        padding: 8,
        minWidth: 120,
        maxWidth: '80%',
        marginTop: 25,
        marginLeft: 'auto',
    },
    submitButtonText: {
        color: "#fff",
        fontSize: 12,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: "600",
    }
})