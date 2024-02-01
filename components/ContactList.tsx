import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid:1,
            name:'nitin sharma',
            status:'i am a software developer',
        },
        {
            uid:2,
            name:'Ashish Verma',
            status:'i am a Backend Expert',
        },
        {
            uid:3,
            name:'Sadhya dashora',
            status:'i am a Frontend developer',
        }
    ];
  return (
    <View >
      <Text style={styles.headingtext}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map((uid,name,status)=>(
            <View ></View>
        ))}

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

    headingtext: {
        fontSize: 20,
        textAlign:'center',
        fontWeight: 'bold',
        paddingHorizontal: 10
      },
      container:{

      },

})