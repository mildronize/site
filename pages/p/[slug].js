import { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import Config from '../../config';
import PageLayout from '../../components/layouts/PageLayout';

export default class Page extends Component {
  static async getInitialProps ({ query }) {
    // fetch single post detail
    const response = await fetch(
      `${Config.apiUrl}/pages/${query.slug}.json`
    )
    const page  = await response.json();
    // const data = page[0];
    // console.log(`${Config.WPAPI.allPagesById}&slug=${query.slug}`);
    // console.log(page);
    return { page: page }
  }

  render () {
    const { title, content } = this.props.page;

    return (
      <PageLayout>
      <main>
        {/* <Head>
          <title>{title.rendered}</title>
        </Head> */}
        <div
          dangerouslySetInnerHTML={{ __html:  content }}
        />
       
      </main>
      </PageLayout>
    )
  }
}
