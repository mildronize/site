const fetch = require('isomorphic-unfetch');
const path = require('path');
const withOffline = require('next-offline')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const apiUrl = 'https://mildronize-data.netlify.app';
const per_page = 100;

async function getPages(prefix, WPUrl){
  const response = await fetch(WPUrl)
  const postList = await response.json()
  // console.log(postList);
  // tranform the list of posts into a map of pages with the pathname `/post/:slug`
  const pages = postList.reduce(
    (pages, post) =>
      Object.assign({}, pages, {
        [`/${prefix}/${post.slug}`]: { page: `/${prefix}/[slug]` }
      }),
    {}
  )
  return pages;
}

module.exports = withOffline(withBundleAnalyzer({
  sassOptions: {
    includePaths: [path.join(__dirname, "./node_modules"), path.join(__dirname, 'styles')],
  },
  async exportPathMap () {
    let pages = await getPages('b',`${apiUrl}/posts.json`);
    pages = Object.assign({}, pages, 
      await getPages('p',`${apiUrl}/pages.json`)
    );
    return Object.assign({}, pages, {
      '/': { page: '/' },
      '/admin': { page: '/admin' },
      '/_preview': { page: '/_preview' },
      '/search': { page: '/search' },
      '/status': { page: '/status' },
    })
  }
}));
