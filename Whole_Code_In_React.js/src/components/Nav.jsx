import Piston from "/PISTONS.png";
import Cart from "/Cart.png";
import Search from "/Search.png";
import Close from "/Close.png";
import Bars from "/Bars.png";
import { useState } from "react";
import "../Styles/Header.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [search, setSearch] = useState(true);
  const [bars, setBars] = useState(true);
  return (
    <div className=" nav1">
      <nav className="nav1 navbar  navbar-expand-md  bg-body-tertiary">
        <div className="p-0 ps-3 container-fluid ">
          <img src={Piston} className="pistonslogo ms-2" alt=" logo" />
          <div
            className="navbar-collapse collapse "
            id="navid  navbarSupportedContent"
          >
            <ul className="w-100 mb-2 mb-lg-0 d-flex  oxygen navbar-nav justify-content-center">
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  NEW
                </Link>
              </li>
              <li className="navid nav-item">
                <Link className="nav-link" href="#">
                  BRANDS
                </Link>
              </li>
              <li className="navid nav-item">
                <Link className="nav-link" href="#">
                  COLLECTIONS
                </Link>
              </li>
              <li className="navid nav-item">
                <Link className="nav-link" href="#">
                  ACCESSORIES
                </Link>
              </li>
              <li className="navid nav-item">
                <a className="nav-link" href="#about">
                  ABOUT
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex">
            <img src={Cart} className="searchlogo me-3 mt-1 " alt="Cart logo" />
            <img
              src={Search}
              className="searchlogo me-3 mt-1  "
              alt="Search logo"
              onClick={() => {
                setSearch(false);
              }}
            />
            <div className="m-0 p-0 pe-3 bardiv ">
              <img
                src={Bars}
                className="barslogo"
                alt="bars logo"
                onClick={() => {
                  setBars(false);
                }}
                style={{ pointerEvents: search ? "auto" : "none" }}
              />
            </div>
          </div>
        </div>
        {bars ? (
          <></>
        ) : (
          <div
            className=" bg-light ps-3 ham"
            style={{ position: "absolute", right: "0%", top: "0" }}
          >
            <ul className="w-100 mb-2 mb-lg-0 d-flex  oxygen navbar-nav justify-content-center">
              <li className="justify-content-between nav-item d-flex ">
                <Link className="navid nav-link" href="#">
                  NEW
                </Link>
                <img
                  className="closelogo"
                  src={Close}
                  alt="close logo"
                  onClick={() => {
                    setBars(true);
                  }}
                />
              </li>
              <li className="navid  nav-item">
                <Link className="nav-link" href="#">
                  BRANDS
                </Link>
              </li>
              <li className="navid nav-item">
                <Link className="nav-link" href="#">
                  COLLECTIONS
                </Link>
              </li>
              <li className="navid nav-item">
                <Link className="nav-link" href="#">
                  ACCESSORIES
                </Link>
              </li>
              <li className="navid  nav-item">
                <a className="nav-link" href="#about">
                  ABOUT
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
      {search ? (
        <></>
      ) : (
        <div
          className="bg-light pb-2 pe-2"
          style={{ position: "absolute", right: "2%" }}
        >
          <div className="d-flex justify-content-end">
            <img
              className="closelogo"
              src={Close}
              alt="close logo"
              onClick={() => {
                setSearch(true);
              }}
            />
          </div>
          <div className="d-flex flex-row pe-3 px-3 pb-3 pt-2 ms-2 oxygenfont">
            <input className="search me-1" type="search" aria-label="Search" />
            <button className="searchbtn " type="submit">
              SEARCH
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
