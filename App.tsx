import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCard from './components/ElevatedCard'
import FancyCards from './components/FancyCards'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'


export default function App() {
  return (
    <SafeAreaView>
      <ScrollView> 
        
        {/* <Text>App</Text> */}
        <FlatCards/>
        <ElevatedCard/>
        <FancyCards/>
        <ActionCard/>
        <ContactList/>
      </ScrollView>
     
    </SafeAreaView>
      
    
  )
}