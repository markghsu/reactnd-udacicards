import { ADD_DECK, ADD_CARD } from '../actions'

function reducer (state = {}, action) {
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
        ...state
      }
		default:
			return state
	}
}

export default reducer