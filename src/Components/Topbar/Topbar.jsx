import React, { useContext, useState } from "react";
import "./Topbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import { darkmoodContext } from "../../Contexts/darkmood";

export default function Topbar({show , setShow}) {
  const { darkMood, setDarkMood } = useContext(darkmoodContext);
  return (
    <>
      <section className={`Topbar text-dark ${darkMood ? "dark-mode" : ""}`}>
        <section className="topbarcontainer">
          <section className="topbarLeft flex ">
          <div>
              <button
                className="userListEdit opensidebar toggleButton"
                onClick={() => setShow(!show)}
              >
                <i class="fa-solid fa-bars"></i>
              </button>
            </div>
            <div>
              <span className="logo">Sadaf</span>
            </div>
          </section>

          <section className="topbarRight">
            <label className="ui-switch">
              <input
                type="checkbox"
                id="toggle"
                onClick={() =>
                  darkMood === false ? setDarkMood(true) : setDarkMood(false)
                }
              />
              <div className="slider">
                <div className="circle"></div>
              </div>
            </label>

            <div className="topbarIcon">
              <NotificationsNoneIcon />
              <span className="badge">2</span>
            </div>
            <div className="topbarIcon">
              <LanguageIcon />
              <span className="badge">2</span>
            </div>
            <div className="topbarIcon">
              <SettingsIcon />
            </div>
            {/* <img
              src="./src/assets/Images/bg-header.jpg"
              alt="profile"
              className="topbarAvatar"
            /> */}
          </section>
        </section>
      </section>
    </>
  );
}
