import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  
  const linksLis = links.map((link) => {
  return <a key= {"#"+link} id = {link} href ={"#"+link}>{link}</a>})
  
  return linksLis
}

export default NavBar;
