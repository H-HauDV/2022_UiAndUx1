import React from "react";

import Layout from "./layout";

export default function LayoutContainer({ children }) {
  return (
    <Layout>
      <div className="container">{children}</div>
    </Layout>
  );
}
