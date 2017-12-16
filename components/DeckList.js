import React, {Component} from 'react'
import {View, ScrollView, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {receiveDecks} from '../actions'
import * as API from '../utils/api'

class DeckList extends Component {
	componentDidMount() {
		API.getDecks().then((data)=>{
			this.props.dispatch(receiveDecks(data))
		}).catch((error)=>{
		})
	}
	state = {
	}
	viewDeck = (deck) => this.props.navigation.navigate('DeckView',{id:deck})
	render() {
		return (
			<View>
				<Text>DeckList</Text>
				<View style={styles.container}>
					{Object.keys(this.props.decks).map((keyName,keyIndex)=>{
						const deck = this.props.decks[keyName]
						
						return (<TouchableOpacity key={keyName} onPress={()=>(this.viewDeck(keyName))}>
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


function mapStateToProps(state){

	return {
		decks: state["decks"]
	}
}
export default connect(mapStateToProps)(DeckList)