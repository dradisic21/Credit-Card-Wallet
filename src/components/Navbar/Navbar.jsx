import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fetchMenuItems from "./menuItemsAPI";

export function Navbar() {
  const [menuItems, setMenuItems] = useState([]);

  
  useEffect(() => {
    const getMenuItems = async () => {
      const items = await fetchMenuItems();
      setMenuItems(items);
    };

    getMenuItems();
  }, []);

  return (
    <div className="container">
      <nav>
        <ul>
          <Link href="#" className="logo">
            <img src="../../assets/logo/wallet-logo.png" alt="Logo" />
            <span className="nav-item">WALLET</span>
          </Link>
          <div>
            <img src="" alt="profilna" />
          </div>
          {menuItems.map((item, index) => (
            <li key={index.id}>
              <Link to={item.link}>
                <i className={item.icon}></i>
                <span className="nav-item">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};


