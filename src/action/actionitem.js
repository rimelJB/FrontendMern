import axios from "axios";

export const getItems =()=> async(dispatch)=> {
  try {
      dispatch({type:"getItemsprocess"})
    const res = await axios.get("https://irentbackend.onrender.com/api/items")
    dispatch({ type: "getItemssucceed", payload: res.data })
  } 
  catch (error) {
    dispatch ({type:"getitemFailed"})
  }
};


