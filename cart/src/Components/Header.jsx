import React from "react";

function Header(props) {
  const { cartCount } = props;
  return (
    <div className="header">
      <div>
        <a href="/">
          <h2>Cart Page</h2>
        </a>
      </div>
      <div className="count">
        <a href="/cart">Cart{cartCount ? <button>{cartCount}</button> : ""}</a>
        <a href="/signin">Signin</a>
      </div>
    </div>
  );
}

export default Header;
