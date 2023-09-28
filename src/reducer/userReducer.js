const initialState = { Loading: false, isAuth: false, error: [""] };

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "registerProcess":
     case "loginProcess":
      case "authProcess":

      return ({ ...state.error, Loading: true });
      break;
    case "registerSuccess":
      return( { ...state.error, Loading: false,isAuth:false });
      break;
      case "loginSuccess":
      case 'authSucceeded':
        return( {...state.error, Loading: false,isAuth:true});
        break;

    case "registerFailed":
    case "loginFailed":
  
      return( { ...state.error, Loading: false, error: payload });
      break;
      case 'authFailed':
        return( {  Loading: false,isAuth:false});


    case 'logout':
    return({...state,isAuth:false,Loading:false})

    default:
      return (state);
      break;
  }
};
export default userReducer;
