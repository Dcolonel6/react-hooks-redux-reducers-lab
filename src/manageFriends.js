const initialState = {
  friends: []
}

export function manageFriends(state = initialState, action) {
  // your code here
  const {payload} = action
  const {friends} = state
  switch(action.type){
    case "friends/add":      
      return { friends: [ ...friends, payload]}
    case "friends/remove":
      return {friends: state.friends.filter(({id}) => id !== payload)}
    default:
      return state
  }
}
