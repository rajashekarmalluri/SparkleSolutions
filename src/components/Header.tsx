import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

const { SubMenu } = Menu;

interface props {
  page: string;
}

const Header: React.FC<props> = ({ page }) => {
  let [current, setCurrent] = useState("");

  useEffect(() => {
    setCurrent(page);
  }, [page]);

  return (
    <header>
      <div className="main-nav-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header-inner">
                <div className="col-12 col-sm-2 sitebranding">
                  <Link to="/">
                    <img
                      className="logo"
                      src="./images/logosmall.jpeg"
                      alt="logo"
                    ></img>
                  </Link>
                </div>
                <div id="main-navigation" className="col-12 col-sm-10">
                  <Menu mode="horizontal" selectedKeys={[current]}>
                    <Menu.Item key="about">
                      <Link to="/about">About</Link>
                    </Menu.Item>
                    <Menu.Item key="products">
                      <Link to="/goals">Goals</Link>
                    </Menu.Item>
                    <Menu.Item key="offerings">
                      <Link to="/solutions">Solutions</Link>
                    </Menu.Item>
                    <Menu.Item key="services">
                      <Link to="/services">Services</Link>
                    </Menu.Item>
                    <Menu.Item key="team">
                      <Link to="/team">Team</Link>
                    </Menu.Item>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
