import { Component } from "react";
import fetch from "isomorphic-unfetch";
import Config from "../config";
import Link from "next/link";
import PostList from "../components/PostList";
import Header from "../components/layouts/Header";

class Home extends Component {
  static async getInitialProps() {
    return {};
  }

  render() {
    return (
      <>
      <Header />
      <main>
        <div className="page-container">
          <div class="first-page--header">
            <div>V. 4.0.0</div>
            <div>
              <Link href="/blog">
                <a>GO TO MY BLOG</a>
              </Link>
            </div>
          </div>

          <div class="first-page--cover-bg">
            <div class="first-page--head">MILDRONIZE</div>

            <div class="first-page--vertical-align">
              <div class="first-page--quote">
                DREAM => ([ <br />
                "Actions", "Discipline", "Small Win", "Commitment"
                <br />
                ]);
              </div>

              <div class="first-page--bottom-content row">
                <div class="first-page--bottom-content-item col-sm">
                  <div class="first-page--bottom-content-title">
                    THADA WANGTHAMMANG
                  </div>
                  <br />
                  Mild, someone called me "Smile"
                </div>
                <div class="first-page--bottom-content-item col-sm">
                  <a
                    href="https://www.flickr.com/photos/mildronize"
                    target="blank"
                  >
                    <div class="first-page--bottom-content-title">
                      PHOTOGRAPHER
                    </div>
                    <br />
                    <br />I love photograph and travel
                  </a>
                </div>

                <div class="first-page--bottom-content-item col-sm">
                  <Link href="/blog">
                    <a>
                      <div class="first-page--bottom-content-title">
                        DEVELOPER
                      </div>
                      <br />
                      <br />I love coding and sharing
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      </>
    );
  }
}

export default Home;
