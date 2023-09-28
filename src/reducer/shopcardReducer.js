const initialState = {
	cart: [],
};

if (localStorage.getItem('item')) {
	initialState.cart = JSON.parse(localStorage.getItem('item'));
} else {
	initialState.cart = [];
}

const shopcardReducer = (state = initialState, {type,payload}) => {
	switch (type) {
		case "ADD_TO_CART":
			return {
				cart: [...payload],
			};
		case "DELETE_FROM_CART":
			return {
				cart: [...payload],
			};
		default:
			return state;
	}
};

export default shopcardReducer;
