import Link from "next/link";

import Layout from "../components/Layout";

const Index = () => (
  <Layout>
    <br />
    <Link href="/index">
      <a> Welcome to WHATABYTE! Start Exploring Now</a>
    </Link>
  </Layout>
);

export default Index;