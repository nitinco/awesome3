import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImagesAssets from '../assets/imageassets'

export default function FancyCards() {
    return (
        <SafeAreaView>
            <View>
                <Text style={styles.headingtext}>News-DEkho</Text>
                <View style={styles.card}>
                    <Image source={ImagesAssets.bannerlist1} style={styles.image}></Image>
                    <Text style={styles.imgdesc}>This is image that can be used for as a background in app </Text>
                </View>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    headingtext: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        textAlign: 'center',
    },
    image: {
        height: 180,
        width: '100%',

    },
    imgdesc: {
        marginTop: 10,
        fontSize: 15,
        color: 'yellow',
        textAlign: 'center',
    },
    card:{
        margin:8,
        borderRadius:8,
        height:300,  
        backgroundColor:'red',
    },
})