import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImagesAssets from '../assets/imageassets';

export default function ContactList() {
    const contacts = [
        {
            uid:1,
            name:'nitin sharma',
            status:'i am a software developer',
            imageurl:ImagesAssets.Nitin,
        },
        {
            uid:2,
            name:'Ashish Verma',
            status:'i am a Backend Expert',
            imageurl:ImagesAssets.Ashish,
        },
        {
            uid:3,
            name:'Sadhya dashora',
            status:'i am a Frontend developer',
            imageurl:ImagesAssets.sadhaya,
        }
    ];
  return (
    <View >
      <Text style={styles.headingtext}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid,name,status,imageurl})=>(
            <View key={uid}>
              <Image source={imageurl} style={styles.userimage} />
              <Text>{name}</Text>
              <Text>{status}</Text>

            </View>
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
        // justifyContent:'center',

      },
      userimage:{
        paddingHorizontal:100,
        borderRadius:9,
        
        width:200,
        height:400
      },

})