export const addToCart = item => async dispatch => {
	// if cart already exists in local storage, use it, otherwise set to empty array
	const cart = localStorage.getItem('item')
		? JSON.parse(localStorage.getItem('item'))
		: [];

	// check if duplicates
	const duplicates = cart.filter(cartItem => cartItem.__id === item.__id);

	// if no duplicates, proceed
	if (duplicates.length === 0) {
		// prep product data
		const productToAdd = {
			...item,
			count: 1,
		};

		// add product data to cart
		cart.push(productToAdd);

		// add cart to local storage
		localStorage.setItem('item', JSON.stringify(cart));

		// add cart to redux
		dispatch({
			type: "ADD_TO_CART",
			payload: cart,
		});
	}
};

export const deleteFromCart = item => async dispatch => {
	const cart = localStorage.getItem('item')
		? JSON.parse(localStorage.getItem('item'))
		: [];

	const updatedCart = cart.filter(cartItem => cartItem.__id !== item.__id);

	localStorage.setItem('item', JSON.stringify(updatedCart));

	dispatch({
		type: "DELETE_FROM_CART",
		payload: updatedCart,
	});
};