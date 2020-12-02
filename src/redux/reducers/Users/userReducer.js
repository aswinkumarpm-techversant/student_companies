
export default function UserReducer(state = null, action) {
  switch (action.type) {
    case "GET_USERS":
      return { ...state }
    default:
      return { ...state }
  }
}