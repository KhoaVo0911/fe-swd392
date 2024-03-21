import { useEffect, useState } from "react";
import "../../styles/components/header.scss";
import MobileMenu from "../MobileMenu/MobileMenu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "antd";
import { FiUser, FiUserX } from "react-icons/fi";
import { useNavigate } from "react-router";
import { PAGE_ROUTES } from "../../utils/constant";

const Header = () => {
  const [menuActive, setMenuState] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  // const [cartActive, setcartState] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate(PAGE_ROUTES.LOGIN);
  }

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken")
    if (accessToken) {
      setIsAuthenticated(true);
    }
  },[]);
  

  return (
    <header id="header">
      <div className="site-header header-style-1">
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                <div className="mobail-menu">
                  <MobileMenu />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="navbar-header">
                  <a
                    onClick={ClickHandler}
                    className="navbar-brand"
                    href="/home"
                  >
                    <img src="images/logo.png" alt="logo" />
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-1 col-1">
                <div id="navbar">
                  <button className="menu-close">
                    <CloseIcon className="ti-close"></CloseIcon>
                  </button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li className="menu-item-has-children">
                      <a onClick={ClickHandler} href="/">
                        Home
                      </a>
                    </li>

                    <li className="menu-item-has-children">
                      <a onClick={ClickHandler} href="/project">
                        Project
                      </a>
                    </li>
                    <li className="menu-item-has-children">
                      <a onClick={ClickHandler} href="/blog">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a onClick={ClickHandler} href="/contact">
                        Contact
                      </a>
                    </li>
                    <li className="menu-item-has-children">
                      <a onClick={ClickHandler} href="/shop">
                        Product
                      </a>
                    </li>

                    <li>
                      <a onClick={ClickHandler} href="/quotation">
                        Quotation
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-2 col-2">
                <div className="header-right">
                  <div className="header-search-form-wrapper">
                    <div className="cart-search-contact">
                      <button
                        onClick={() => setMenuState(!menuActive)}
                        className="search-toggle-btn"
                      >
                        <SearchIcon
                          className={`fi ti-search ${
                            menuActive ? "ti-close" : "fi"
                          }`}
                        ></SearchIcon>
                      </button>
                      <div
                        className={`header-search-form ${
                          menuActive
                            ? "header-search-content-toggle"
                            : ""
                        }`}
                      >
                        <form onSubmit={SubmitHandler}>
                          <div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search here..."
                            />
                            <button type="submit">
                              <SearchIcon className="fi-ti-search"></SearchIcon>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  {isAuthenticated ? (
                    <>
                      <Button
                        shape="circle"
                        size="large"
                        icon={<FiUser />}
                        onClick={() => handleLogout()}
                      ></Button>
                    </>
                  ) : (
                    <>
                      <Button
                        shape="circle"
                        size="large"
                        icon={<FiUser />}
                        onClick={() => navigate(PAGE_ROUTES.LOGIN)}
                      ></Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;