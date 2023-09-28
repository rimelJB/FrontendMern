import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { getItems } from "../../action/actionitem";
import { Link } from "react-router-dom";
import AddItem from "../../component/AddItem";
import { addToCart } from "../../action/shopAction";
import { padding } from "@mui/system";

const Items = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const items = useSelector((state) => state.itemReducer.items);
  const loading = useSelector((state) => state.itemReducer.loading);
  useEffect(() => {
    dispatch(getItems());
  }, []);

  return (
    
    <div className="container-fluid items bg ">
      <div  className="container">
      <div className="row ">    
          {loading ? (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Ajux_loader.gif/600px-Ajux_loader.gif"
              alt="loading"
              style={{
                display: "flex",
              }}
            />
          ) : (
            items?.item?.map((item) => {
              return (
                <div className="col-md-3"
                  style={{ marginTop: "80px",  }}
                  key={item._id}
                >
                  <Card
                    style={{
                      width: "18em",
                      height: "30em",
                      display: "flex", flexDirection: "column",
                      alignItems:"center",
                      boxShadow:
                        "1px 1px 1px 1px rgba(0, 0, 0, 0.2), 1px 2px 1px 2px #d7a3f5",
                    }}
                  >
                    <Card.Img
                      src={item.image}
                      alt={item.id}
                      style={{
                        height: "12em",
                        margin: "0.5em",
                        padding: "1em",
                        width: "auto",
                      }}
                    />
                    <Card.Body
                      style={{ display: "flex", flexDirection: "column",alignItems:"center"}}
                    >
                      <h4
                        style={{
                          color: "#b95eee",
                          textAlign: "center",
                          marginTop: "10px",
                        }}
                      >
                        {" "}
                        {item.item}
                      </h4>
                      <h6 style={{ marginTop: "10px" }}>
                        {" "}
                        Price: {item.price} DNT/Day
                      </h6>
                      <div
                        style={{
                          marginTop: "20px",
                          display: "inline-block",
                        }}
                      >
                        {isAuth ? (
                          <Button
                            variant="primary"
                            onClick={() => dispatch(addToCart(item))}
                            style={{
                              backgroundColor: "black",
                              border: "solid white 3px",
                              justifyContent: "center",
                              marginRight: "65px",
                            }}
                          >
                            I-Rent
                          </Button>
                        ) : null}
                        <Link to={`/items/description/${item.__id}`}>
                          <Button
                            variant="primary"
                            className="bt1"
                            style={{
                              border: "solid white 3px",
                              justifyContent: "center",
                              marginLeft: "5px",
                            }}
                          >
                            Details
                          </Button>
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              );
              //
            })
          )}
      </div>
      <div className="row">
          <div style={{ marginTop: "60px", marginBottom: "20px" }}>
            <AddItem />
          </div></div>
    </div></div>
  );
};

export default Items;
