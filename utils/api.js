import { AsyncStorage } from 'react-native'
const DECK_KEY = 'Udacicards:deck'

export function fetchAllDecks() {
	return AsyncStorage.getItem(DECK_KEY)
}