import Item from "@components/item";
import Layout from "@components/layout";
import ProductList from "@components/product-list";
import type { NextPage } from "next";

const Sold: NextPage = () => {
  return (
    <Layout title="Profile" canGoBack>
      <div className="flex flex-col space-y-5 divide-y pb-10">
        <ProductList kind="sales" />
      </div>
    </Layout>
  );
};

export default Sold;
