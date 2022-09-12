import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../components/layout/Icon";

import { Container } from "./styles";

const Sidebar: React.FC = () => {
  const [companyData, setCompanyData] = useState();

  const body = document.querySelector("body"),
    sidebar = body?.querySelector("nav"),
    toggle = body?.querySelector(".toggle"),
    searchBtn = body?.querySelector(".search-box"),
    modeSwitch = body?.querySelector(".toggle-switch"),
    modeText = body?.querySelector(".mode-text");

  toggle?.addEventListener("click", () => {
    sidebar?.classList.toggle("close");
  });

  searchBtn?.addEventListener("click", () => {
    sidebar?.classList.remove("close");
  });

  modeSwitch?.addEventListener("click", () => {});
  return (
    <Container>
      <nav className="sidebar open">
        <header>
          <div className="image-text">
            <figure className="avatar avatar-xl">
              <img
                src="https://shopgoes.s3.amazonaws.com/901fec7d-0db3-41b0-a6d3-3669ffc53398-image_2022_01_21T20_21_48_202Z.png"
                alt="..."
              />
            </figure>

            <div className="text logo-text">
              <span className="name">Eduardo</span>
              <span className="profession">Pizzaria Campo Grande</span>
            </div>
          </div>

          <i className="bx bx-chevron-right toggle"></i>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links">
              <li className="nav-link">
                <Link to="home">
                  <Icon icon="home" />
                  <p className="text nav-text">Ínicio</p>
                </Link>
              </li>

              <li className="nav-link">
                <Link to="menus">
                  <Icon icon="menu_book" />
                  <p className="text nav-text">Cardápios</p>
                </Link>
              </li>

              <li className="nav-link">
                <Link to="home">
                  <Icon icon="restaurant" />
                  <p className="text nav-text">Pedidos</p>
                </Link>
              </li>
              <li className="nav-link">
                <Link to="home">
                  <Icon icon="person" />
                  <p className="text nav-text">CRM</p>
                </Link>
              </li>
            </ul>
          </div>

          <div className="bottom-content">
            <li className="nav-link">
              <a href="#">
                <Icon icon="logout" />
                <p className="text nav-text">Logout</p>
              </a>
            </li>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default Sidebar;
