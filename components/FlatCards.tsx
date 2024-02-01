import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.headingtext}>FLat cards</Text>
        
        <View style={styles.container}>
          
          <View style={[styles.card, styles.cardOne]} >
            <Text >Red</Text>
          </View>
          
          <View style={[styles.card, styles.cardTwo]}>
            <Text>Aqua</Text>
          </View>
          
          <View style={[styles.card, styles.cardThree]}>
            <Text>Blue</Text>
          </View>

          <View style={[styles.card, styles.cardOne]} >
            <Text >Red</Text>
          </View>
          

        </View>

      </View>

    </SafeAreaView>

  )
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    flexDirection:'row',
    margin:10,
    padding:10,
    
    

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
  cardOne:{
    backgroundColor:'#EF5354',
    

  },
  cardTwo:{
    backgroundColor:'#50DBB4',
    

  },
  cardThree:{
    backgroundColor:'#5DA3FA',
    

  },
  headingtext: {
    fontSize: 20,
    textAlign:'center',
    fontWeight: 'bold',
    paddingHorizontal: 10
  },
  

}) 