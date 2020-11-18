import React, { Component } from "react";
import Header from "./Header";
import Navbar from "./MyNavbar";
import Footer from "./Footer";
import { initGA, logPageView } from "../../utils/analytics";
import { hotjar } from 'react-hotjar';

// https://web.dev/codelab-use-lazysizes-to-lazyload-images/
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

class PageLayout extends Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();

    hotjar.initialize(1614923, 6);
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />

        <Navbar />

        <div className="page-container">{children}</div>
        <Footer />
      </div>
    );
  }
}

export default PageLayout;
