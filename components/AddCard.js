import React, {Component} from 'react'
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import {lightPurp, white} from '../utils/colors'
import {connect} from 'react-redux'
import {addCard} from '../actions'
import {addCardToDeck} from '../utils/api'

class AddCard extends Component {
	state = {
		question:"",
		answer:""
	}
	submit=()=>{
		const {question,answer} = this.state
		//Update store
		this.props.dispatch(addCard(question,answer,this.props.navigation.state.params.title))
		//Update in DB
		addCardToDeck(this.props.navigation.state.params.title,{question, answer})
		//Navigate to back to deck
		this.props.navigation.goBack()
	}
	changeQuestion= (question) => {
		this.setState(()=>({
			question
		}))
	}
	changeAnswer= (answer) => {
		this.setState(()=>({
			answer
		}))
	}
	render() {
		const {answer,question} = this.state
		return (
			<View style={styles.container}>
				<TextInput value={question} placeholder="Enter your question" style={styles.field} onChangeText={this.changeQuestion} />
				<TextInput value={answer} placeholder="Enter your answer" style={styles.field} onChangeText={this.changeAnswer} />
				<TouchableOpacity style={styles.button} onPress={this.submit}>
					<Text style={{textAlign:'center',color:white}}>Submit</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

export default connect()(AddCard)

const styles = StyleSheet.create({
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
		borderColor: '#777',
		margin: 50,
		backgroundColor: white
	},
	button: {
		width: 200,
		height: 50,
		padding: 10,
		borderWidth: 2,
		alignContent: 'center',
		justifyContent: 'center',
		backgroundColor: 'black',
	}
});