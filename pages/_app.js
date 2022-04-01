import { ConfigProvider } from "antd";

import "styles/globals.scss";
import store from "store";
import Layout from "layouts/layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ConfigProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ConfigProvider>
  );
};

export default store.withRedux(MyApp);
