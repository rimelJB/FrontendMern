import axios from "axios";

export const getItems =()=> async(dispatch)=> {
  try {
      dispatch({type:"getItemsprocess"})
    const res = await axios.get("http://localhost:5000/api/items")
    dispatch({ type: "getItemssucceed", payload: res.data })
  } 
  catch (error) {
    dispatch ({type:"getitemFailed"})
  }
};


