import { AsyncStorage } from 'react-native'
const DECK_KEY = 'Udacicards:deck'

export function getDecks() {
	return AsyncStorage.getItem(DECK_KEY).then((result)=>{
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
		[title]:{title}
	})
}

export function addCardToDeck(title,card){
	return AsyncStorage.mergeItem(DECK_KEY, JSON.stringify({
		[title]:{questions:[card]}
	})
}