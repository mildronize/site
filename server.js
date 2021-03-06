const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/b/:slug', (req, res) => {
      const actualPage = '/b/[slug]';
      const queryParams = { slug: req.params.slug, apiRoute: 'post' };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/p/:slug', (req, res) => {
      const actualPage = '/p/[slug]';
      const queryParams = { slug: req.params.slug, apiRoute: 'page' };
      app.render(req, res, actualPage, queryParams);
    });

    // server.get('/category/:slug', (req, res) => {
    //   const actualPage = '/category';
    //   const queryParams = { slug: req.params.slug };
    //   app.render(req, res, actualPage, queryParams);
    // });

    // server.get('/_preview', (req, res) => {
    //   const actualPage = '/preview';
    //   // const { id, rev, type, status, wpnonce } = req.params;
    //   // const queryParams = { 
    //   //   id: req.params.id,
    //   //   rev: req.params.rev,
    //   //   type: req.params.type, 
    //   //   status: req.params.status,
    //   //   wpnonce: req.params.wpnonce };
    //   app.render(req, res, actualPage, {});
    // });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
