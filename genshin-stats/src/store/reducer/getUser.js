import { LOADING, SUCCESS_FETCH_USER } from "@/store/actions/actionType"

const initialState = {
  currentUserData : '',
  userLoading : false
}

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_FETCH_USER:
      return {
        ...state,
        currentUserData: action.payload
      }
    case LOADING:
      return {
        ...state,
        LOADING: action.payload
      }
    default: 
      return state
  }

}

export default currentUserReducer