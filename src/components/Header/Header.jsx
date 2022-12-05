import React from "react";

const Header = ({ money, total }) => {
  return (
    <div>
      {total > 0 && money - total !== 0 && (
        <div>Harcayacak ${money - total} paranız vardır.</div>
      )}

      {total === 0 && <div>Harcayamak için ${money} paranız vardır.</div>}
      {money - total === 0 && <div>Paran bitti.</div>}
    </div>
  );
};

export default Header;
