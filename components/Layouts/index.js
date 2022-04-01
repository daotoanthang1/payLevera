import { InstagramOutlined, TwitterOutlined } from "@ant-design/icons";
import { faEnvelope, faMap, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Menu } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { FaBars, FaFacebook } from "react-icons/fa";
const Layouts = ({ children }) => {
  const [navVisible, setNavVisible] = useState(false);
  let localtion = useRouter();

  const handleLogin = () =>
    (document.location = `https://id.pancake.vn/oauth2/authorize?grant_type=code&client_id=${APP_ID}&redirect_uri=${API_BASE}/users/login&scope=avatar,email,subscriptions&locale=vi`);
  const handleRegister = () =>
    (document.location = `https://id.pancake.vn/signup?redirect_uri=http%3A%2F%2Fid.pancake.vn%2Foauth2%2Fauthorize%3Fgrant_type%3Dcode%26client_id%3D226eb5dba26c4e7b986794dc7f6c284c%26redirect_uri%3Dhttp%3A%2F%2Flocalhost%3A2099%2Fapi%2Fusers%2Flogin%26scope%3Davatar%2Cemail%2Csubscriptions%26force%3Dtrue`);

  const localeLinks = () => {
    switch (true) {
      case localtion.asPath === "/merchant":
        return "1";
      case localtion.asPath === "/":
        return "2";
      case localtion.asPath === "/faq":
        return "3";
    }
  };

  const handleNavVisible = () => {
    setNavVisible(!navVisible);
  };
  const navigation = () => {
    if (navVisible == true) {
      return (
        <div className="navigation">
          <Menu defaultSelectedKeys={[localeLinks()]}>
            <Menu.Item key="1" className="class-special">
              <Link href="/merchant">
                <a>Nhà bán lẻ</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="2" className="class-special">
              <Link href="/">
                <a>Người mua</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="3" className="class-special">
              <Link href="/faq">
                <a>FAQ</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="4" className="class-special">
              <a onClick={handleLogin}>Đăng nhập</a>
            </Menu.Item>
            <Menu.Item key="5" className="class-special">
              <a onClick={handleRegister}>Đăng kí</a>
            </Menu.Item>
          </Menu>
        </div>
      );
    } else {
      return null;
    }
  };
  return (
    <Fragment>
      <div className="header">
        <div className="wrapper-header">
          <div className="section-container header-fixed">
            <div className="text-logo">
              <h2>
                <Link href="/">levera/pay</Link>
              </h2>
            </div>
            <div className="button-interract">
              <div className="log-in">
                <div className="button-start">
                  <Button type="primary" size="large" onClick={handleLogin}>
                    <h4>Đăng nhập</h4>
                  </Button>
                </div>
              </div>
            </div>
            {navigation()}
            <div className="navigation nav-pc">
              <Menu defaultSelectedKeys={[localeLinks()]}>
                <Menu.Item key="1" className="class-special">
                  <Link href="/merchant">
                    <a>Nhà bán lẻ</a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="2" className="class-special">
                  <Link href="/">
                    <a>Người mua</a>
                  </Link>
                </Menu.Item>
                <Menu.Item div="underthrough" key="3" className="class-special">
                  <Link href="/faq">
                    <a style={{ marginLeft: "25px" }}>FAQ</a>
                  </Link>
                </Menu.Item>
              </Menu>
            </div>
            <div className="burger" onClick={handleNavVisible}>
              <FaBars />
            </div>
          </div>
        </div>
      </div>

      {children}

      <div className="footer">
        <div className="section-container">
          <div className="levera-pay">
            <h2>levera/pay</h2>
            <div className="information-company">
              <ul className="part-1">
                <li>
                  <h3>CÔNG TY TNHH ĐẦU TƯ CÔNG NGHỆ LEVERA</h3>
                </li>
                <li>
                  <p>
                    Tuyên bố từ chối trách nhiệm - Levera Pay là nền tảng công
                    nghệ cung cấp dữ liệu và kết nối giữa người bán hàng và dịch
                    vụ tài chính. Levera không phải là Nhà cung cấp dịch vụ
                    thanh toán (PSP hoặc 3PP) và không cung cấp dịch vụ tín dụng
                    hoặc dịch vụ ngân hàng tại Việt Nam. Bất kỳ dịch vụ Thanh
                    toán hoặc Tín dụng nào được đề cập trong trang web này đều
                    do đối tác tài chính của Levera Pay tại Việt Nam cung cấp
                    trực tiếp. ©️ Levera - 2021
                  </p>
                </li>
                <li>
                  <h3>Follow us</h3>
                  <ul className="follow-us">
                    <li>
                      <FaFacebook />
                    </li>
                    <li>
                      <InstagramOutlined />
                    </li>
                    <li>
                      <TwitterOutlined />
                    </li>
                  </ul>
                </li>
              </ul>

              <ul className="part-2">
                <h3>Danh mục</h3>
                <li style={{ marginTop: "44px" }}>Nhà bán lẻ</li>
                <li>Người mua</li>
                <li>Liên hệ</li>
                <li>Câu hỏi thường gặp</li>
              </ul>

              <ul className="part-3">
                <h3>Discover your app</h3>
                <li>
                  <div className="GG-play "></div>
                </li>
                <li>
                  <div className="App-store "></div>
                </li>
              </ul>

              <ul className="part-4">
                <h3>Địa chỉ</h3>
                <li style={{ marginTop: "44px" }}>
                  <FontAwesomeIcon
                    icon={faMap}
                    fill="black"
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "20px",
                    }}
                  />
                  <p>58 Tố Hữu, P.Trung Văn, Q.Nam Từ Liêm, Tp.Hà nội</p>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faPhone}
                    fill="black"
                    style={{
                      marginTop: "44px",
                      width: "20px",
                      height: "20px",
                      marginRight: "20px",
                    }}
                  />
                  <h3>+84 090 000 000</h3>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    fill="black"
                    style={{
                      marginTop: "44px",
                      width: "20px",
                      height: "20px",
                      marginRight: "20px",
                    }}
                  />
                  <h4>support@levera.com</h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="design">
          <p>© Thiết kế bởi Levera Pay</p>
        </div>
      </div>
    </Fragment>
  );
};
export default Layouts;
