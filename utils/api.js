import { AsyncStorage } from 'react-native'
const DECK_KEY = 'Udacicards:deck'

export function getDecks() {
	return AsyncStorage.getItem(DECK_KEY).then((result)=>{
		if(result===null)return {}
		const data = JSON.parse(result)
		return data
	})
}

export function getDeck(id) {
	return AsyncStorage.getItem(DECK_KEY).then((result)=>{
		const data = JSON.parse(result)
		return data[id]
	})
}

export function saveDeckTitle(title){
	//DOES NOT CHECK IF DECK ALREADY EXISTS
	//TODO: CHECK IF DECK EXISTS ALREADY
	return AsyncStorage.mergeItem(DECK_KEY, JSON.stringify({
		[title]:{
			title:title,
            questions:[]
        }
	}))
}

export function addCardToDeck(title,card){
	return AsyncStorage.mergeItem(DECK_KEY, JSON.stringify({
		[title]:{questions:[card]}
	}))
}

/*
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
*/