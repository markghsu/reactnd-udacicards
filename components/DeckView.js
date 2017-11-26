import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default class DeckView extends Component {

	render() {
		const {title,questions} = this.props
		return (
			<View>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.subheader}>{questions.length} card{questions.length!==1?"s":""}</Text>
				<TouchableOpacity>
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