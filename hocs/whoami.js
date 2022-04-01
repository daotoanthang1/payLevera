import Head from "next/head";
import { withRouter } from "next/router";
import { Component } from "react";
import { connect } from "react-redux";
import { showUser } from "actions";
import wrapper from "store";

const whoami = (ChildComponent) => {
  let pageInfo = ChildComponent.pageInfo
    ? ChildComponent.pageInfo
    : { title: "Levera" };

  @withRouter
  class HigherOrderComponent extends Component {
    render() {
      return (
        <div className="app-container">
          <Head>
            <title>{pageInfo.title}</title>
            <meta property="og:title" content="Levera Pancake" />
            <link
              href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.10.3/antd.min.css"
              rel="stylesheet"
            ></link>
          </Head>
          <ChildComponent {...this.props} />
        </div>
      );
    }
  }

  const Extended = connect(null)(HigherOrderComponent);

  Extended.getInitialProps = wrapper.getInitialPageProps(
    (store) => async (ctx) => {
      if (ctx.req) {
        const user = ctx.req.user;
        if (user) {
          await store.dispatch(showUser(user.id, user.accessToken));
        }
      }
    }
  );

  return Extended;
};

export default whoami;
