import React from "react";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";

const ProductDesign = ({ product, addToCart }) => {
  const dispatch = useDispatch();

  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  };

  return (
    <div className="cd">
      <img src={`./Images/${product.url}`} width="259px" height="326px"></img>
      <div style={{ fontSize: "10px", marginTop: "5px", color: "gray" }}>
        {product.category}
      </div>
      <div style={{ fontSize: "14px", marginTop: "2px" }}>{product.name}</div>
      <div style={{ fontSize: "14px", marginTop: "3px" }}>{product.price}</div>
      <div style={{ fontSize: "9px", marginTop: "3px", color: "gray" }}>
        {product.subcategory}
      </div>
      <button
        style={{
          width: "100px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          textAlign: "center",
          fontSize: "12px",
          height: "30px",
          marginTop: "5px",
        }}
        onClick={() => send(product)}
      >
        Add To Cart
      </button>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addToCart: (id) => dispatch(addToCart(id)),
//   };
// };

// export default connect(null, mapDispatchToProps)(ProductDesign);
export default ProductDesign;
