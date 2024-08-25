import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";

const Navbar = () => {
  const Navigate = useNavigate();
  return (
    <ul className={styles.navbar}>
      <li
        onClick={() => {
          Navigate("/");
        }}
      >
        Home
      </li>
      <li
        onClick={() => {
          Navigate("/about");
        }}
      >
        About
      </li>
      <li onClick={() => Navigate("/blog")}>Blog</li>
    </ul>
  );
};

export default Navbar;
