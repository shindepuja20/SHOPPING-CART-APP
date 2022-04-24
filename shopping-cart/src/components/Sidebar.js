import "../App.css";
import Data from "./Data";
import { Form, Button } from "react-bootstrap";
import { GiConverseShoe, GiRunningShoe } from "react-icons/gi";
import { HiSortAscending, HiSortDescending } from "react-icons/hi";

const Sidebar = ({ hightop, lowtop, showall, asc, desc }) => {
  return (
    <div className="filters">
      <span className="title">SHOE STYLE</span>
      <div>
        <div class="flex-container">
          <button onClick={() => hightop("HIGH TOP SHOE")}>
            <b>HIGH TOP SHOE</b>
          </button>
          <button onClick={() => lowtop("LOW TOP SHOE")}>
            <b>LOW TOP SHOE</b>
          </button>
        </div>
        <button onClick={() => showall()} className="third">
          <b>ALL PRODUCTS</b>
        </button>
      </div>
      <span className="title">SORT BY PRICE</span>
      <div>
        <button
          className="media"
          onClick={() => asc()}
          style={{ backgroundColor: "inherit", border: "none", color: "white" }}
        >
          <HiSortAscending
            style={{ fontSize: "35px", marginRight: "5px", color: "white" }}
          />
          <b>LOW TO HIGH</b>
        </button>
      </div>
      <div>
        <button
          className="media"
          onClick={() => desc()}
          style={{ backgroundColor: "inherit", border: "none", color: "white" }}
        >
          <HiSortDescending
            style={{ fontSize: "35px", marginRight: "5px", color: "white" }}
          />
          <b>HIGH TO LOW</b>
        </button>
      </div>
    </div>
  );
};
export default Sidebar;
