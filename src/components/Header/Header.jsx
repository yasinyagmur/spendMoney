import React from "react";
import { moneyFormat } from "../../helpers";
import "./header.css";

const Header = ({ money, total }) => {
  return (
    <div>
      {total > 0 && money - total !== 0 && (
        <div className="header">
          Harcayacak <span> ${moneyFormat(money - total)}</span> paranız vardır.
        </div>
      )}

      {total === 0 && (
        <div className="header">
          Harcayamak için <span>${moneyFormat(money)}</span> paranız vardır.
        </div>
      )}
      {money - total === 0 && <div className="header">Paran bitti.</div>}
    </div>
  );
};

export default Header;
