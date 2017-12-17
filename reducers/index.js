import { ADD_DECK, ADD_CARD, RECEIVE_DECKS } from '../actions'

function reducer (state = {decks:[]}, action) {
  switch (action.type) {
		case ADD_DECK :
      decks = typeof state.decks === 'undefined'?[]:state.decks
      decks.push
      return {
        ...state,
        decks:{
          ...state.decks,
          [action.name]:{
            title:action.name,
            questions:[]
          }
        }
      }
		case ADD_CARD :
      return {
        ...state,
        decks:{
          ...state.decks,
          [action.deck]:{
            ...state.decks[action.deck],
            questions:[
              ...state.decks[action.deck]['questions'],
              action.card
            ]
          }
        }
      }
    case RECEIVE_DECKS:
      return {
        ...state,
        decks: action.decks
      }
		default:
			return state
	}
}

export default reducer