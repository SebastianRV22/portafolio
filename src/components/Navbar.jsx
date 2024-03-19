import React, { useState } from "react";

function Navbar() {
  const [listNav] = useState(["Home", "Skills", "Projects", "Contact"]);
  return (
    <header>
      <div className="logo">
        <img src="/logo.png" alt="" />
      </div>
      <nav>
        {
        
        listNav.map((value, key) => (
          <span key={key}>{value}</span>
        ))
        }
      </nav>
    </header>
  );
}

export default Navbar;
