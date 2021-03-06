import React, { Component } from "react";
import Link from "next/link";
import {
  Collapse,
  Navbar,
  // NavbarToggler,
  NavbarBrand
  // Nav,
  // NavItem,
  // NavLink
} from "reactstrap";

export default class extends Component {
  state = {
    isOpen: false,
    isScrollDownClass: "",
    isOpenNav: true,
    previousScrollY: 0
  };

  resetState() {
    this.setState({
      isOpen: false,
      isScrollDownClass: "",
      isScrollDown: false,
      previousScrollY: 0
    });
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  componentDidMount() {
    this.resetState();
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  }

  handleScroll(event) {
    // reduce freq for checking scroll
    // if (window.scrollY % 10 != 0) {
    //   this.setState({ previousScrollY: window.scrollY });
    //   return;
    // }
    const targetScrollY = 130;

    if (window.scrollY > targetScrollY || this.state.isOpen) {
      this.setState({ isScrollDownClass: "navbar-is-scroll-down" });
    } else {
      this.setState({ isScrollDownClass: "" });
    }

    // Check scroll direction: up or down

    if (
      this.state.previousScrollY > window.scrollY ||
      window.scrollY < targetScrollY
    ) {
      this.setState({ isOpenNav: true });
    } else {
      this.setState({ isOpenNav: false });
      this.setState({ isOpen: false });
    }

    this.setState({ previousScrollY: window.scrollY });
  }

  render() {
    return (
      <>
        <div className="fixed-top">
          <Collapse isOpen={this.state.isOpenNav}>
            <Navbar
              color="light"
              light
              expand="sm"
              className={`bg-white ${this.state.isScrollDownClass}`}
            >
              <div className="page-container">
                {/* <NavbarBrand> */}
                <span className="logo-link">
                  <Link href="/">
                    <a>
                      <img className="logo" src="/icons/apple-touch-icon.png" />
                    </a>
                  </Link>
                </span>
                {/* <a className="tag-alpha">
                  MILD'S BLOG
                </a> */}
                {/* </NavbarBrand> */}

                {/* <NavbarToggler onClick={() => this.toggle()} /> */}
                <span className="my-nav ml-auto">
                  <Link href="/p/[slug]" as={`/p/about`}>
                    <a className="nav-link">about</a>
                  </Link>
                  {/* <a className="nav-link"><i className="fas fa-search"></i></a> */}
                </span>

                {/* <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <Link className="nav-link" href="/">
                        <a className="d-flex justify-content-center">
                          <NavLink >
                            home
                          </NavLink>
                        </a>
                      </Link>

                    </NavItem>
                    <NavItem>
                      <Link className="nav-link" href="/page/about">
                        <a className="d-flex justify-content-center">
                          <NavLink>about </NavLink></a>
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link className="nav-link" href="/search">
                        <a className="d-flex justify-content-center">
                          <NavLink><i className="fas fa-search"></i></NavLink></a>
                      </Link>
                    </NavItem>
                  </Nav>
                </Collapse> */}
              </div>
            </Navbar>
          </Collapse>
        </div>
        <div className="header-offset-bottom"></div>
      </>
    );
  }
}
