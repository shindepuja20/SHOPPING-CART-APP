import React from "react";
import { Container, Navbar, FormControl, Button, Badge } from "react-bootstrap";
import "../App.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Header = ({ setSearch }) => {
  const getdata = useSelector((state) => state.cartreducer.carts);

  return (
    <Navbar
      style={{
        backgroundColor: "white",
      }}
    >
      <Container>
        <Navbar.Brand style={{ fontSize: "25px" }}>
          <Link to="/">Converse Shoes</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            className="searchbar"
            onChange={(e) => setSearch(e.target.value)}
          />
        </Navbar.Text>

        <Link to="/cart">
          <Button className="stylebtn btn-circle">
            <FaShoppingCart
              style={{
                marginLeft: "-3px",
                marginBottom: "9px",
              }}
            ></FaShoppingCart>
            <Badge bg="danger" className="roundedCircle">
              {getdata.length}
            </Badge>
          </Button>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Header;
