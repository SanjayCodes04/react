import React from "react";

function Footer() {
  const currentyear = new Date().getFullYear();
  return <p> Copyrights {currentyear}</p>;
}

export default Footer;
