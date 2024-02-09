import React, { useState ,  useContext } from "react";
import "./Sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import CategoryIcon from "@mui/icons-material/Category";
import { NavLink } from "react-router-dom";
import { darkmoodContext } from "../../Contexts/darkmood";

export default function Sidebar({ show , setShow  }) {

  const {darkMood , setDarkMood} = useContext(darkmoodContext)

  return (
    <>
      <section className={`sidebar   ${show ? "show" : ""} ${darkMood ? 'dark-mode' : ''}`}>
        <section className="sidebarContainer">
          <section className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <NavLink
                to="/"
                className={`link ${darkMood ? 'dark-mode' : ''} ${(isActive) => {
                  isActive ? "active" : " ";
                }}`}
              >
                <li className={`sidebarItems ${darkMood ? 'dark-mode' : ''}`}>
                  <LineStyleIcon className="sidebarIcon" />
                  Home
                </li>
              </NavLink>
            </ul>
          </section>

          <section className={`sidebarMenu ${darkMood ? 'dark-mode' : ''}`}>
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              <NavLink to="/users" className="link">
                <li className="sidebarItems">
                  <PermIdentityIcon className="sidebarIcon" />
                  Users
                </li>
              </NavLink>

              <NavLink to="/articles" className="link">
                <li className="sidebarItems">
                  <AttachMoneyIcon className="sidebarIcon" />
                  Articles
                </li>
              </NavLink>

              <NavLink to="/courses" className="link">
                <li className="sidebarItems">
                  <BarChartIcon className="sidebarIcon" />
                  Courses
                </li>
              </NavLink>

              <NavLink to="/categories" className="link">
                <li className="sidebarItems">
                  <CategoryIcon />
                  Categories
                </li>
              </NavLink>
            </ul>
          </section>
        </section>
      </section>

   
    </>
  );
}
