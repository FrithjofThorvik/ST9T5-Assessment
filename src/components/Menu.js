import React from "react";
import { useHistory } from "react-router-dom";
import "../css/Menu.css";

function Menu() {
  const history = useHistory();

  return (
    <div className="menu">
      <div onClick={() => history.push("/")} className="menu-card">
        <div className="menu-cardHeader">Personality Test</div>
        <div className="menu-cardBody">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          possimus aperiam molestias quidem veritatis provident, culpa natus
          aliquam. Voluptas, fugiat.
        </div>
      </div>
    </div>
  );
}

export default Menu;
