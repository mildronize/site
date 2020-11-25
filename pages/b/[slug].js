import { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import Config from "../../config";
import PageLayout from "../../components/layouts/PageLayout";
import { parseISO, format } from "date-fns";
import he from "he";
import LazyLoad from "react-lazyload";
import Disqus from "disqus-react";

export default class PostPage extends Component {
  static async getInitialProps({ query }) {
    // fetch single post detail
    const response = await fetch(`${Config.apiUrl}/posts/${query.slug}.json`);
    const post = await response.json();
    return { post };
  }

  render() {
    const { title, content, date, slug } = this.props.post;

    const disqusShortname = "mildronize-react";
    const disqusConfig = {
      url: `https://mildronize.com/b/${slug}`,
      identifier: slug,
      title: he.decode(title),
    };

    return (
      <PageLayout>
        <main>
          <Head>
            <title>{title}</title>
          </Head>
          <article>
            <h1 dangerouslySetInnerHTML={{ __html: title }} />
            <p className="post-tagline">
              <span className="post-tagline-date">
                {format(parseISO(date), "MMMM d, yyyy")}
              </span>
              {Config.nodeEnv !== "development" && (
                <>
                  <span className="post-tagline-delimiter">|</span>
                  <span className="post-tagline-comment">
                    <Disqus.CommentCount
                      shortname={disqusShortname}
                      config={disqusConfig}
                    >
                      Comments
                    </Disqus.CommentCount>
                  </span>
                </>
              )}
            </p>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </article>

          {Config.nodeEnv !== "development" && (
            <section aria-label="comment">
              <div className="post-offset-bottom" />
              <h1>Comment</h1>
              <LazyLoad width={200}>
                <Disqus.DiscussionEmbed
                  shortname={disqusShortname}
                  config={disqusConfig}
                />
              </LazyLoad>
            </section>
          )}

          <section>
            <div className="post-offset-bottom" />
            <center>
              <Link href="/">
                <a>
                  <i className="fas fa-arrow-left mr-3"></i> GO BACK TO HOME
                </a>
              </Link>
            </center>
            <div className="post-offset-bottom" />
          </section>
        </main>
      </PageLayout>
    );
  }
}
