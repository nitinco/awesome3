import { Image, Linking, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ImagesAssets from '../assets/imageassets'


export default function ActionCard() {
    function openWebsite(websitelink: string) {
        Linking.openURL(websitelink)
    }
    return (
        <SafeAreaView>
            <View>
                <Text style={styles.headingtext}>ActionCard</Text>


                <View style={[styles.card, styles.cardElevated]}>

                    <TouchableOpacity onPress={() => openWebsite('https://www.google.com/')}>
                        <Text style={styles.boxtext}>Open google</Text>
                    </TouchableOpacity >
                    <TouchableOpacity onPress={() => openWebsite('https://www.youtube.com/')}>
                        <Text style={styles.boxtext}>#Open Youtube</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>openWebsite('https://github.com/')}>
                    <Text style={styles.boxtext}>#Open github</Text>
                    </TouchableOpacity>
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
    card: {
        // height: 200,
        backgroundColor: 'purple',
        margin: 10,

    },
    cardElevated: {
        borderCurve: 'circular'
    },
    boxtext: {
        fontSize: 15,
        // marginTop:50,
        padding: 10,
    },
    frame: {
        flex: 1,
        flexDirection: 'row',
        margin: 5,
        borderEndColor: 'green',

    }

})