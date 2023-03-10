import Layout from "@components/layout";
import ProductList from "@components/product-list";
import type { NextPage } from "next";

const Bought: NextPage = () => {
  return (
    <Layout title="구매내역" canGoBack>
      <div className="flex flex-col space-y-5 divide-y pb-10">
        <ProductList kind="purchases" />
      </div>
    </Layout>
  );
};

export default Bought;
