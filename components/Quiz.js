import React, {Component} from 'react'
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import {lightPurp, white} from '../utils/colors'
import {connect} from 'react-redux'
import ShowCard from './ShowCard'

class Quiz extends Component {
	state = {
		questionNum:0,
		numCorrect:0,
		numIncorrect:0,
	}
	nextQuestion=()=>{
		
		if(this.state.questionNum === this.props.deck.questions.length - 1){
			//Last element
			alert(this.state.numCorrect+' correct '+this.state.numIncorrect+' incorrect.')
		}
		else {
			this.setState((st)=>{
				return {
					questionNum:st.questionNum + 1
				}
			})
		}
	}
	correctQuestion= () => {
		this.setState((st)=>{
			return {
				numCorrect:st.numCorrect + 1
			}
		},()=>{this.nextQuestion()})
		
	}
	incorrectQuestion= () => {
		this.setState((st)=>{
			return {
				numIncorrect:st.numIncorrect + 1
			}
		},()=>{this.nextQuestion()})
	}
	render() {
		const {question,answer} = this.props.deck.questions[this.state.questionNum]
		return (
			<View style={styles.container}>
				<View>
					<Text>{this.state.numCorrect} correct</Text>
					<Text>{this.state.numIncorrect} incorrect</Text>
				</View>
				<ShowCard question={question} answer={answer} />
				<View style={styles.buttons}>
					<TouchableOpacity style={styles.button} onPress={this.correctQuestion}>
						<Text style={{textAlign:'center',color:white}}>Correct</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={this.incorrectQuestion}>
						<Text style={{textAlign:'center',color:white}}>Incorrect</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

function mapStateToProps(state, ownprops){
	return {
		deck: state['decks'][ownprops.navigation.state.params.title]
	}
}
export default connect(mapStateToProps)(Quiz)

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