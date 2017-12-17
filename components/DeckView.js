import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'

class DeckView extends Component {

	render() {
		const {id} = this.props.navigation.state.params
		console.log(id)
		const {title,questions} = this.props.decks[id]
		return (
			<View>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.subheader}>{questions.length} card{questions.length!==1?"s":""}</Text>
				<TouchableOpacity onPress={()=>this.props.navigation.navigate('AddCard',{title})}>
					<Text>Add Card</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text>Start Quiz</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
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

export default connect(mapStateToProps)(DeckView)