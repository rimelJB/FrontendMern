import React, { useState } from "react";
import { InputGroup, FormControl, Button, Modal, Form } from "react-bootstrap";
import { useDispatch,useSelector } from "react-redux";
import axios from "axios";
import { getItems } from "../../src/action/actionitem";


function AddItem() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.itemReducer.loading);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newItem,setNewItem] = useState({
    
		image:"",
    item:"",
    owner:"",
    email:"",
    phone:"",
    description:"",
    price:""	});

	const {
    
		image,
    item,
    owner,
    email,
    phone,
    description,
    price
	} = newItem;


  /****************************
	 * EVENT HANDLERS
	 ***************************/

   const handleItemChange = evt => {
		setNewItem({
			...newItem,
			[evt.target.name]: evt.target.value,
		});
	};


 const handleItemSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/items",newItem);
    setNewItem({

      		image:"",
          item:"",
          owner:"",
          email:"",
          phone:"",
          description:"",
          price:"",
      			});
    dispatch(getItems())
    handleClose();
  };



 

  return (
    <>
    <div className="container"><div className="row"><div className="col-md-5"></div><Button
        variant="outline-dark"
        onClick={handleShow}
        style={{  width: "200px",background:"#c3b6fe"}}
      >
        Add New Item
      </Button></div></div>
    
      

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add your Item</Modal.Title>
        </Modal.Header>

        <Modal.Body>

            {/* <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Enter ID{" "}
            </InputGroup.Text>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              name='id'
              value={__id}
              onChange={handleItemChange} />
          </InputGroup>
          <br /> */}



        
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Enter Item{" "}
            </InputGroup.Text>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              name='item'
              value={item}
              onChange={handleItemChange}            />
          </InputGroup>
          <br />

          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Enter owner Name{" "}
            </InputGroup.Text>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              name='owner'
              value={owner}
              onChange={handleItemChange}
            />
          </InputGroup>
          <br />

          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Enter owner Email{" "}
            </InputGroup.Text>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              name='email'
              value={email}
              onChange={handleItemChange}
            />
          </InputGroup>
          <br />

          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Enter your Phone{" "}
            </InputGroup.Text>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              name='phone'
              value={phone}
              onChange={handleItemChange}
            />
          </InputGroup>
          <br />

          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Enter Price{" "}
            </InputGroup.Text>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              name='price'
              value={price}
              onChange={handleItemChange}
            />
          </InputGroup>
          <br />

          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Enter Item URL Image{" "}
            </InputGroup.Text>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              name='image'
              value={image}
              onChange={handleItemChange}
            />
          </InputGroup>
          <br />

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Enter Item Description</Form.Label>
            <FormControl
              as="textarea"
              rows={3}
              placeholder="Enter Item Description"
             name='description'
              value={description}
              onChange={handleItemChange}
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleItemSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddItem;
