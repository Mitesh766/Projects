import { useEffect, useState } from "react";

const Header = () => {
  const [status, setStatus] = useState("Login");
  useEffect(()=>{
   console.log("useEffect called") 
  },[status])
  return (
    <div className="header-container">
      <div className="logo-container">
        <img
          src="https://img.icons8.com/external-ddara-fill-ddara/64/external-food-delivery-delivery-services-ddara-fill-ddara-1.png"
          alt="external-food-delivery-delivery-services-ddara-fill-ddara-1"
        />
      </div>
      <div className="nav-bar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li
            onClick={() => {
              if (status == "Login") {
                setStatus("Logout");
              } else {
                setStatus("Login");
              }
            }}
          >
            {status}{" "}
          </li>
          <div className="cart">
            <img
              className="cart-icon"
              width="64"
              height="64"
              src="https://img.icons8.com/pastel-glyph/64/food-delivery--v1.png"
              alt="food-delivery--v1"
            />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
