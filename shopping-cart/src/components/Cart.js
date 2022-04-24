import React, { useState, useEffect } from "react";
import { Card, Button, th, tr } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { DLT, ADD, REMOVE } from "../redux/actions/action";

const Cart = () => {
  const [price, setPrice] = useState(0);
  console.log(price);

  const getdataa = useSelector((state) => state.cartreducer.carts);
  console.log(getdataa);

  const dispatch = useDispatch();

  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  };
  const remove = (item) => {
    // console.log(e);
    dispatch(REMOVE(item));
  };

  const dlt = (id) => {
    dispatch(DLT(id));
    console.log(id);
  };

  const total = () => {
    let price = 0;

    getdataa.map((product, k) => {
      price = product.price * product.qnty + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  return (
    // <>
    //   <div
    //     style={{
    //       padding: "5px",
    //       border: "1px solid black",
    //     }}
    //   >
    //     {getdataa.map((product) => (
    //       <div
    //         style={{
    //           backgroundColor: "whitesmoke",
    //           margin: "10px",
    //           boxSizing: "border-box",
    //           padding: "5px",
    //           display: "flex",
    //         }}
    //         key={product.Id}
    //       >
    //         <img
    //           src={`./Images/${product.url}`}
    //           width="169px"
    //           height="236px"
    //           style={{ marginRight: "10px" }}
    //         ></img>
    //         <div>
    //           <div
    //             style={{ fontSize: "20px", marginTop: "50px", color: "gray" }}
    //           >
    //             {product.category}
    //           </div>
    //           <div style={{ fontSize: "25px", marginTop: "2px" }}>
    //             {product.name}
    //           </div>
    //           <div style={{ fontSize: "20px", marginTop: "3px" }}>
    //             {product.price} Rs
    //           </div>
    //           <div
    //             style={{ fontSize: "15px", marginTop: "3px", color: "gray" }}
    //           >
    //             {product.subcategory}
    //           </div>
    //           <p>TOTAL : {product.qnty * product.price}</p>
    //           <div>
    //             <div
    //               className="mt-2 d-flex justify-content-between align-items-center"
    //               style={{
    //                 width: "100px",
    //                 cursor: "pointer",
    //                 border: "2px solid black",
    //                 paddingLeft: 8,
    //                 paddingRight: 8,
    //               }}
    //             >
    //               <span
    //                 style={{ fontSize: 28 }}
    //                 onClick={
    //                   product.qnty <= 1
    //                     ? () => dlt(product.Id)
    //                     : () => remove(product)
    //                 }
    //               >
    //                 -
    //               </span>
    //               <span style={{ fontSize: 25 }}>{product.qnty}</span>
    //               <span style={{ fontSize: 28 }} onClick={() => send(product)}>
    //                 +
    //               </span>
    //             </div>
    //           </div>
    //         </div>
    //         <button onClick={() => dlt(product.Id)}>DELETE</button>
    //       </div>
    //     ))}
    //     <p style={{}}>
    //       TOTAL PRICE IS : <b>{price} Rs</b>
    //     </p>
    //   </div>
    // </>

    <div
      style={{
        width: "100%",
        backgroundColor: "whitesmoke",
        height: "auto",
        padding: "20px",
      }}
    >
      <p>
        <b>GRAND TOTAL IS : {price} Rs</b>
      </p>
      {getdataa.map((product) => (
        <div class="flex-c">
          <div class="flex-left">
            <img
              className="mediasrc"
              src={`./Images/${product.url}`}
              width="260px"
              height="326px"
              style={{ backgroundSize: "cover" }}
            ></img>
          </div>
          <div class="flex-right">
            <div className="maindivflex">
              <p className="stylep">
                {product.category} | {product.subcategory}
              </p>
              <p className="stylename">
                <b>{product.name}</b>
              </p>
              <p className="stylep">Price - {product.price} Rs</p>
              <p className="stylep">
                Total - {product.qnty * product.price} Rs
              </p>
              <div
                className="mt-2 d-flex justify-content-between align-items-center resizebtn"
                style={{
                  width: "100px",
                  cursor: "pointer",
                  border: "2px solid black",
                  paddingLeft: 8,
                  paddingRight: 8,
                }}
              >
                <span
                  style={{ fontSize: 28 }}
                  onClick={
                    product.qnty <= 1
                      ? () => dlt(product.Id)
                      : () => remove(product)
                  }
                >
                  -
                </span>
                <span style={{ fontSize: 25 }}>{product.qnty}</span>
                <span style={{ fontSize: 28 }} onClick={() => send(product)}>
                  +
                </span>
              </div>
              <button
                onClick={() => dlt(product.Id)}
                style={{
                  fontSize: "18px",
                  backgroundColor: "black",
                  color: "white",
                  border: "2px solid black",
                }}
                className="resizecartbtn"
              >
                <b>REMOVE FROM CART</b>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
