import React, {Component} from 'react'
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import {lightPurp, white} from '../utils/colors'

export default class ShowCard extends Component {
	state={
		showAnswer: false
	}
	toggle = () => {
		this.setState(()=>({showAnswer:!this.state.showAnswer}))
	}
	render() {
		const {answer,question} = this.props
		return (
			<View style={styles.container}>
				<View>
					<Text>{question}</Text>
				</View>
				{this.state.showAnswer && (
					<View>
						<Text>{answer}</Text>
					</View>
				)}
				<TouchableOpacity style={styles.button} onPress={this.toggle}>
					<Text style={{textAlign:'center',color:white}}>{this.state.showAnswer?'Hide Answer':'Show Answer'}</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: lightPurp
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