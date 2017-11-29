import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import DeckList from './components/DeckList'
import {white,orange} from './utils/colors'
import {Constants} from 'expo'
import {TabNavigator,StackNavigator} from 'react-navigation'
import DeckView from './components/DeckView'
import AddCard from './components/AddCard'
import AddDeck from './components/AddDeck'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <UStatusBar backgroundColor={orange} barStyle='light-content'/>
        <Stack />
      </View>
    );
  }
}

const Tabs = TabNavigator({
    Decks: {
      screen: DeckList
    },
    Add: {
      screen: AddDeck
    }
  },
  {
    navigationOptions:{
      header: null
    },
    tabBarOptions:{
      activeTintColor: orange,
      style: {
        backgroundColor: white,
        height:56,
        shadowRadius: 6,
        shadowOpacity: 1,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
          width: 0,
          height: 3,
        }
      }
    }
  })
const Stack = StackNavigator({
  Home: {
    screen: Tabs
  },
  DeckView: {
    screen: DeckView
  }
})

function UStatusBar({ backgroundColor, ...props}) {
    return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
