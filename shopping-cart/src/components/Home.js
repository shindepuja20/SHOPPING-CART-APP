import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "../App.css";
import Data from "./Data";
import ProductDesign from "./ProductDesign";

const Home = ({ search }) => {
  const [data, setdata] = useState(Data);

  const [filter, setfilter] = useState(Data);

  const hightop = (cat) => {
    const highTop = data.filter((x) => x.subcategory === cat);
    setfilter(highTop);
  };
  const lowtop = (cat) => {
    const lowTop = data.filter((x) => x.subcategory === cat);
    setfilter(lowTop);
  };
  const showall = () => {
    const allData = data.filter((x) => x.Id);
    setfilter(allData);
  };

  const asc = () => {
    var k = [...filter].sort((a, b) => a.price - b.price);
    console.log(k);
    setfilter(k);
  };

  const desc = () => {
    var d = [...filter].sort((a, b) => b.price - a.price);
    console.log(d);
    setfilter(d);
  };
  console.log(search);
  return (
    <>
      <div className="home">
        <Sidebar
          hightop={hightop}
          showall={showall}
          lowtop={lowtop}
          asc={asc}
          desc={desc}
        />
        <div className="productContainer">
          {filter
            .filter((filteredNode) =>
              filteredNode.category.toLowerCase().includes(search.toLowerCase())
            )
            .map((product) => (
              <ProductDesign key={product.Id} product={product}></ProductDesign>
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
