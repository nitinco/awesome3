import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
  return (
    <SafeAreaView>
    <View>
        <View >
            <Text style={styles.headingtext}>Elevated Card</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>

                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
            </ScrollView>
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
        textAlign:'center',
      },
      card:{
        flex:1,
        width:100,
        height:100,
        margin:8,
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center',
    
        
      },
      cardElevated:{
        backgroundColor:'green',
        elevation:10,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'red'

      },
      container:{
        flex:1,
         padding:8,
        backgroundColor:'white',
        marginBottom:10,
        marginTop:10,
      },

})