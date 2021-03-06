import { Component } from "react";
import fetch from "isomorphic-unfetch";
import Config from "../config";
import Link from "next/link";
import PostList from "../components/PostList";
import PageLayout from "../components/layouts/PageLayout";
import Header from "../components/layouts/Header";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";

class Blog extends Component {
  static async getInitialProps() {
    // fetch list of posts
    const response = await fetch(`${Config.apiUrl}/posts.json`);
    const postList = await response.json();
    // console.log(postList);
    return { postList };
  }

  render() {
    return (
      <>
        <Header />

        <Navbar />

        <div className="home-spacing" />
        <div className="hero-section">
          <div className="hero-overlay">
            <div className="hero-tagline">I'm Lecturer</div>
            <div className="hero-title">Thada Wangthammang</div>
            <div className="hero-content">
              Welcome to my personal archive. You can find almost stuff about me
              - blog posts, resume, projects, contact information, and more.
            </div>
          </div>
        </div>
        <main>
          <div className="page-container">
            {/* <hr /> */}

            <div className="page-section-header">Latest Posts</div>
            <PostList posts={this.props.postList} />
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Blog;
