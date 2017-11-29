import React, {Component} from 'react'
import {View, ScrollView, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native'

export default class DeckList extends Component {
	state = {
	  	decks:{
	  	React: {
	  	    title: 'React',
	  	    questions: [
	  	      {
	  	        question: 'What is React?',
	  	        answer: 'A library for managing user interfaces'
	  	      },
	  	      {
	  	        question: 'Where do you make Ajax requests in React?',
	  	        answer: 'The componentDidMount lifecycle event'
	  	      }
	  	    ]
	  	  },
	  	  JavaScript: {
	  	    title: 'JavaScript',
	  	    questions: [
	  	      {
	  	        question: 'What is a closure?',
	  	        answer: 'The combination of a function and the lexical environment within which that function was declared.'
	  	      }
	  	    ]
	  	  }
	  	}
	}
	viewDeck = (deck) => this.props.navigation.navigate('DeckView',deck)
	render() {
		return (
			<View>
				<Text>DeckList</Text>
				<View style={styles.container}>
					{Object.keys(this.state.decks).map((keyName,keyIndex)=>{
						const deck = this.state.decks[keyName]
						
						return (<TouchableOpacity key={keyName} onPress={()=>(this.viewDeck(deck))}>
							<View style={[{borderWidth:1}]}>
								<Text style={styles.title}>{deck.title}</Text>
								<Text style={styles.subheader}>{deck.questions.length} card{deck.questions.length!==1?"s":""}</Text>
							</View>
						</TouchableOpacity>)			
					})}
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
 container:{

  },
  title: {
    color: '#000',
    fontSize: 24,
    textAlign: 'center',
  },
  subheader: {
  	color:'#333',
  	fontSize: 20,
  	textAlign: 'center'
  }
});