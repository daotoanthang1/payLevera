import Link from "next/link";
import { Layout, Menu, Avatar } from "antd";
import {
  LogoutOutlined,
  BookOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";
import { connect } from "react-redux";

const { Content, Sider } = Layout;

const pages = [
  {
    href: "/user/purchase",
    icon: <ShoppingCartOutlined style={{ fontSize: 16 }} />,
    title: "Đơn hàng",
  },
  {
    href: "/account",
    icon: <UserOutlined style={{ fontSize: 16 }} />,
    title: "Tài khoản",
  },
];

const adminPages = [
  {
    href: "/admin/portal",
    icon: <BookOutlined style={{ fontSize: 16 }} />,
    title: "Cổng thông tin",
  },
  {
    href: "/admin/manage-account",
    icon: <UserOutlined style={{ fontSize: 16 }} />,
    title: "Quản lí tài khoản",
  },
  {
    href: "/admin/manage",
    icon: <MoneyCollectOutlined style={{ fontSize: 16 }} />,
    title: "Quản lí người bán",
  },
  {
    href: "/account",
    icon: <UserOutlined style={{ fontSize: 16 }} />,
    title: "Tài khoản",
  }
];

const AppLayout = ({ children, user }) => {
  const router = useRouter();
  if (router.pathname == "/" || !user) return children;

  const menuItems = user.role == "USER" ? pages : adminPages;
  const currentPage = menuItems.find((page) => page.href == router.pathname);

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider collapsed={false} className="menu-container">
        <div style={{ height: 45, color: "#FFF", fontSize: 18, fontWeight: 500, paddingTop: 10, paddingLeft: 38 }}>
          levera/pay
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[router.pathname]}
          style={{ height: "100%", borderRight: 0 }}
        >
          {menuItems.map(({ href, icon, title }) => {
            return (
              <Menu.Item key={href} icon={icon}>
                <Link href={href}>
                  <a>{title}</a>
                </Link>
              </Menu.Item>
            );
          })}
          <Menu.Item style={{ position: "absolute", bottom: 0 }} key="/logout">
            <a href="/logout">
              <LogoutOutlined style={{ fontSize: 16 }} />
              <span>Đăng xuất</span>
            </a>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ padding: "0 12px 12px" }}>
        <div style={{ padding: "16px 0px" }}>
          <div style={{ fontSize: 22, fontWeight: 600 }}>{currentPage?.title}</div>
        </div>
        <Content style={{ margin: 0 }}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default connect((state) => ({ user: state.auth.user }))(AppLayout);
