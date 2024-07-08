import React from "react";

function Logo({
  width = "100px",
  src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7CU3ckqf4I5DxLImQh0Qjs2jtDNVvrsKTsg&s",
}) {
  return <img src={src} alt="Logo" style={{ width }} />;
}

export default Logo;
