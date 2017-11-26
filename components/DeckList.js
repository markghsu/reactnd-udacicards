import React, {Component} from 'react'
import {View, ScrollView, Text, StyleSheet, Platform} from 'react-native'

export default class DeckList extends Component {

	render() {
		return (
			<View>
				<Text>DeckList</Text>
				<View style={styles.container}>
					{Object.keys(this.props.decks).map((keyName,keyIndex)=>{
						const deck = this.props.decks[keyName]
						
						return (<View key={keyName}>
							<Text style={styles.title}>{deck.title}</Text>
							<Text style={styles.subheader}>{deck.questions.length} card{deck.questions.length!==1?"s":""}</Text>
						</View>)			
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