import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

function CustomDrawerContent(props) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.menuContainer}>
                    <View style={[ styles.menuItemsCard, { backgroundColor: '#EFFFD5' } ]}>
                        <View>
                            <Image style = { styles.userimg } source={require('../assets/images/Avatar1.png')} />
                        </View>
                        <View style={ styles.UserDetails }>
                            <Text style={{ color: '#000', fontSize: 14, fontWeight: '700', }}>Vasheem Ahmad</Text>
                            <Text style={{ color: '#565656', fontSize: 12, fontWeight: '600', marginBottom: 3 }}>Web Designer</Text>
                            <Text style={{ fontSize: 11, fontWeight: '600', backgroundColor: 'red', color: '#fff', borderRadius: 3, padding: 2, width: 60, textAlign: 'center' }}>       
                                TK10839
                            </Text>
                        </View>
                    </View>
                </View>
                <DrawerItemList  {...props}/>
            </DrawerContentScrollView>
            
            <View style={ styles.drawerfooter }>
                <View style={styles.footeritems}>
                    <FontAwesome5 name={'share-alt'} size={14} color={'#EFFFD5'}></FontAwesome5> 
                    <Text style={styles.footeritem}>Share With Friends</Text>
                </View>
                <View style={styles.footeritems}>
                    <FontAwesome5 name={'sign-out-alt'} size={14} color={'#EFFFD5'}></FontAwesome5> 
                    <Text style={styles.footeritem}>Log Out</Text>
                </View>
            </View>
        </View>
    );
}

export default CustomDrawerContent;

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingTop: 0,
        marginTop: -4,
        marginBottom: 10
    },
    menuItemsCard: {
        width: '100%',
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    userimg: {
        width: 70,
        height: 70,
        borderRadius: 100,
        marginRight: 10,
        borderColor: '#008060',
        borderWidth: 3
    },
    drawerfooter: {
        borderColor: '#eee',
        borderTopWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 5
    },
    footeritems: {
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    footeritem: {
        color: '#EFFFD5',
        fontSize: 12,
        fontWeight: '600',
        marginLeft: 10
    }
});