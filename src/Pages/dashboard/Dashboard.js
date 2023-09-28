import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteFromCart } from "../../action/shopAction";
import { Button, Container } from "react-bootstrap";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Dashboard = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.shopcardReducer.cart);

  const handleQtyChange = (e, item) => {
    const cart = localStorage.getItem("item")
      ? JSON.parse(localStorage.getItem("item"))
      : [];

    cart.forEach((cartItem) => {
      if (cartItem._id === item._id) {
        return (cartItem.count = e.target.value);
      }
    });

    localStorage.setItem("item", JSON.stringify(cart));

    dispatch({
      type: "ADD_TO_CART",
      payload: cart
    });
  };

  return (
<div className="container-fluid bg">
	<div className="row" style={{padding:"5%"}}></div>
      {cart.length <= 0 ? (
		<>
		<div className="container">
			<div className="row" style={{padding:"5%"}} >
        <Container
          style={{
            width: "100%",
            backgroundColor: "#c3b6fe",
            textAlign: "center",
			display: "flex",
			flexDirection:" column",
			  alignItems: "center",
			  padding:"2%"
          }}
        >
          <h1 className="display-4">Welcome! Your cart is empty </h1>
          <p>To check out items</p>
          <Link to="/items">
            <Button
              style={{
                backgroundColor: "black",
                border: "solid 2px black",
                marginBottom: "5%"
              }}
              active
            >
              go to Items
            </Button>
          </Link>
        </Container>
      </div></div> </> ) : (
        <>
          <Container
            style={{
              fontSize: "50%",
              width: "50%",
              backgroundColor: "#c3b6fe",
              textAlign: "center"
            }}
          >
            {" "}
            <h1 className="display-4">Welcome To Cart!</h1>
          </Container>
          <div className="row">
            <div className="col-md-8">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Days</th>
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cart?.map((item) => {
                    return (
                      <tr key={item.__id}>
                        <th scope="row">
                          {" "}
                          <img
                            style={{
                              maxWidth: "110px"
                            }}
                            className="img-fluid w-100 img-thumbnail"
                            src={item.image}
                            alt="item"
                          />
                        </th>
                        <td>
                          {" "}
                          <Link to={`/items/description/${item.__id}`}>
                            {item.item}
                          </Link>
                        </td>
                        <td>
                          {item.price}
                          {""}DNT
                        </td>
                        <td>
                          <input
                            type="number"
                            min="1"
                            max="20"
                            value={item.count}
                            onChange={(e) => handleQtyChange(e, item)}
                          />
                        </td>
                        <td>
                          {" "}
                          <button
                            onClick={() => dispatch(deleteFromCart(item))}
                          >
                            <DeleteForeverIcon></DeleteForeverIcon>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-4 border-left pl-4">
            <h2 style={{ color: "#b951f5" }}>Cart Summary</h2>
            <p className="font-weight-light text-muted border-bottom">
              {cart.length === 1 ? "(1) Item" : `(${cart.length}) Items`}
            </p>
            <h6 className="font-weight-bold">
              Total:
              {cart
                .reduce(
                  (currentSum, currentCartItem) =>
                    currentSum + currentCartItem.count * currentCartItem.price,
                  0
                )
                .toFixed(2)}{" "}
              DNT
            </h6>
            <Button
              style={{
                background: "#b951f5",
                border: "solid 2px black",
                color: "black"
              }}
            >
              Proceed to Checkout
            </Button>
          </div>
        </>
      )}
	</div>
  );
};

export default Dashboard;
