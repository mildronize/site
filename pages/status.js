import React, { Component } from "react";
import PageLayout from '../components/layouts/PageLayout';


class AdminPage extends Component {

  render() {
    return <PageLayout>
      <h1>Status</h1>

      <div className="row mt-5">
        <div className="col-sm-3">
          Main Web:
          </div>
        <div className="col-sm">
          <a href="https://app.netlify.com/sites/mildronize/deploys">
            <img src="https://api.netlify.com/api/v1/badges/ef5a7e89-ac18-4f1d-a15e-8f704e88f2ce/deploy-status" alt="Netlify Status" />
          </a>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm-3">
          Data API:
          </div>
        <div className="col-sm">
          <a href="https://app.netlify.com/sites/mildronize-data/deploys">
            <img src="https://api.netlify.com/api/v1/badges/99ea2040-2728-4b09-860b-f3b3f49edd72/deploy-status" alt="Netlify Status" />
          </a>
        </div>
      </div>
    </PageLayout>
  }
}

export default AdminPage;
