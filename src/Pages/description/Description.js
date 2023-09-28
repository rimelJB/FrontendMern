import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { getItems } from "../../action/actionitem";

const Description = () => {
  const x = useParams();
  console.log("x", x);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.itemReducer.items);
  const loading = useSelector((state) => state.itemReducer.loading);
  let filteredItems = [];
  if (items?.item && Array.isArray(items.item)) {
    filteredItems = items.item.filter((el) => el.__id == x.id);
  }

  console.log("des item", items);
  useEffect(() => {
    dispatch(getItems());
  }, []);

  return (
    <div style={{ marginTop: "60px" }}>
      {loading ? (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Ajux_loader.gif/600px-Ajux_loader.gif"
          alt="loading"
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "20%",
          }}
        />
      ) : (
        filteredItems.map((item) => {
          return (
            <Card className="text-center">
              <Card.Header>
                <h1>{item.item}</h1>
              </Card.Header>
              <Card.Body>
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
                <Card.Text>
                  <div>
                    <h3>Description</h3>
                    <hr />
                    <p>{item.description}</p>
                  </div>
                </Card.Text>
                <Card.Title>
                  <h5> Owner: {item.email}</h5>
                  <h6>Phone: {item.phone}</h6>
                  <h6> Price: {item.price} DNT/Day</h6>
                </Card.Title>
                <Link to="/items">
                  <Button variant="primary">Go back </Button>
                </Link>
              </Card.Body>
            </Card>
          );
        })
      )}
    </div>
  );
};

export default Description;
