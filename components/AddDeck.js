import React, {Component} from 'react'
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import {lightPurp, white} from '../utils/colors'
import {addDeck} from '../actions'
import {connect} from 'react-redux'
import {saveDeckTitle} from '../utils/api'
class AddDeck extends Component {
	state = {
		input:""
	}
	submit=()=>{
		deck = this.state.input
		//Update store
		this.props.dispatch(addDeck(deck))
		//Update in DB
		saveDeckTitle(deck)
		//Clear Input
		this.setState(()=>({
			input:""
		}))
		//Navigate to Deck
		this.props.navigation.navigate('DeckView',{id:deck})
	}
	changeInput= (input) => {
		this.setState(()=>({
			input
		}))
	}
	render() {
		const {input} = this.state
		return (
			<View style={styles.container}>
				<Text style={styles.title}>What is the name of your deck?</Text>
				<TextInput value={input} placeholder="Enter Deck Title" style={styles.field} onChangeText={this.changeInput} />
				<TouchableOpacity style={styles.button} onPress={this.submit}>
					<Text style={{textAlign:'center',color:white}}>Submit</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	title:{
		width: 250,
		fontSize: 26,
		textAlign: 'center'
	},
	container:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: lightPurp
	},
	field: {
		alignSelf: 'stretch', 
		height: 44,
		padding: 8,
		borderWidth: 1,
		borderRadius: 5,
		borderColor: '#777',
		margin: 50,
		backgroundColor: white
	},
	button: {
		width: 200,
		height: 50,
		padding: 10,
		borderWidth: 2,
		borderRadius: 5,
		alignContent: 'center',
		justifyContent: 'center',
		backgroundColor: 'black',
	}
});

export default connect()(AddDeck)