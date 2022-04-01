import { ArrowRightOutlined } from "@ant-design/icons";
import {
  faCaretLeft,
  faCaretRight,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";
import Layout from "components/Layouts";
import levera from "hocs/whoami";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
const merchant = () => {
  const handleLogin = () =>
    (document.location = `https://id.pancake.vn/oauth2/authorize?grant_type=code&client_id=${APP_ID}&redirect_uri=${API_BASE}/users/login&scope=avatar,email,subscriptions&locale=vi`);
  const handleRegister = () =>
    (document.location = `https://id.pancake.vn/signup?redirect_uri=http%3A%2F%2Fid.pancake.vn%2Foauth2%2Fauthorize%3Fgrant_type%3Dcode%26client_id%3D226eb5dba26c4e7b986794dc7f6c284c%26redirect_uri%3Dhttp%3A%2F%2Flocalhost%3A2099%2Fapi%2Fusers%2Flogin%26scope%3Davatar%2Cemail%2Csubscriptions%26force%3Dtrue`);
  const isBigScreen = useMediaQuery({ query: "(min-width:769px)" });

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  if (!isBigScreen) {
    settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  } else {
    settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
  }

  return (
    <Layout>
      <div className="body">
        <div className="section-1-purchase">
          <div className="section-container">
            <div className="text">
              <div className="title">
                <h4>Mua trước trả sau</h4>
              </div>

              <div className="description-main">
                <h1>
                  Bán nhiều hơn bằng cách cung cấp lựa chọn trả góp minh bạch.
                </h1>
              </div>

              <div className="description-element">
                <h5>
                  Nền tảng của chúng tôi đã sẵn sàng được tích hợp, đảm bảo cho
                  phép các khoản trả góp ngay lập tức.
                </h5>
              </div>

              <div className="button-elements">
                <div className="button-get-start">
                  <Button type="primary" size="large" onClick={handleLogin}>
                    <h1>Get start</h1>
                  </Button>
                </div>
                <div className="contact">
                  <Button
                    className="contactButton"
                    type="primary"
                    size="large"
                    onClick={handleRegister}
                  >
                    <h1>Liên hệ</h1>
                  </Button>
                </div>
              </div>
            </div>
            <div className="img-main-section-1-purchase"></div>
            <div className="line">
              <div className="line-1"></div>
              <div className="line-2"></div>
              <div className="line-3"></div>
            </div>
          </div>
        </div>

        <div className="section-2-action-method">
          <div className="section-container">
            <div className="title-section-2">
              <h1>Cách thức hoạt động</h1>
            </div>
            <div className="wrapper-element-action">
              <ul>
                <li>
                  <div className="element-action e1">
                    <div className="number">01</div>
                    <div className="icon-action">
                      <div className="card-icon"></div>
                    </div>

                    <p className="p-specific">
                      Khách hàng của bạn chọn <br /> Levera Pay tại khâu thanh
                      toán
                    </p>
                  </div>
                </li>
                <li>
                  <div className="element-action e2">
                    <div className="number">02</div>
                    <div className="icon-action">
                      <div className="pencil"></div>
                    </div>

                    <p className="p-specific">
                      Khách hàng điền thêm một vài thông tin
                    </p>
                  </div>
                </li>
                <li>
                  <div className="element-action e3">
                    <div className="number">03</div>
                    <div className="icon-action">
                      <div className="calendar"></div>
                    </div>

                    <p className="p-specific">
                      Khách sẽ được trả dần qua 6 kỳ trong 6 tháng
                    </p>
                  </div>
                </li>
              </ul>
              <div className="transformation-1">
                <div className="line-arrow"></div>
                <ArrowRightOutlined />
              </div>
              <div className="transformation-2">
                <div className="line-arrow"></div>
                <ArrowRightOutlined />
              </div>
            </div>
          </div>
        </div>

        <div className="section-3-easy-shopping section-general">
          <div className="section-container">
            <div className="img-main-easy-shopping"></div>
            <div className="navigation-description">
              <div className="line">
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
              </div>
              <div className="title">
                <h4>CÁCH MUA SẮM DỄ DÀNG NHẤT TẠI VIỆT NAM</h4>
              </div>
              <div className="title-big">
                <h1>Niềm tin là tất cả</h1>
              </div>
              <div className="description">
                Levera Pay cung cấp trải nghiệm mua sắm toàn diện, sứ mệnh chính
                của chúng tôi là giúp mọi người mua sắm một cách dễ dàng.
              </div>
              <div className="start" onClick={handleLogin}>
                <p>Bắt đầu</p>
                <div className="transformation">
                  <div className="line-arrow"></div>
                  <ArrowRightOutlined />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-4-our-valid">
          <div className="section-container">
            <div className="line">
              <div className="line-1"></div>
              <div className="line-2"></div>
              <div className="line-3"></div>
            </div>
            <div className="wrapper-title-description">
              <div className="title">
                <h2>Giá trị chúng tôi mang tới</h2>
              </div>
              <div className="description">
                <p>
                  Chúng tôi cung cấp cho người mua sự tự tin khi biết tiền của
                  họ đang được chi vào đâu thay vì lo lắng về các khoản đã lỡ
                  tiêu.
                </p>
              </div>
            </div>
            <div className="wrapper-section-4-valid-card">
              <Slider {...settings}>
                <div>
                  <div className="element-section-4-valid-card e1">
                    <div className="box-element-section-4-valid-card">
                      <div className="icon">
                        <div className="exchange"></div>
                      </div>
                    </div>
                    <div className="title-description-icon">
                      <h3>Tăng tỉ lệ chuyển đổi mua hàng</h3>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="element-section-4-valid-card e2">
                    <div className="icon">
                      <div className="exchange-less"></div>
                    </div>
                    <div className="title-description-icon">
                      <h3>Ít đổi trả hơn</h3>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="element-section-4-valid-card e3">
                    <div className="icon">
                      <div className="user_plus"></div>
                    </div>
                    <div className="title-description-icon">
                      <h3>Khách hàng mới</h3>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="element-section-4-valid-card e4">
                    <div className="icon">
                      <div className="currency"></div>
                    </div>
                    <div className="title-description-icon">
                      <h3>Giá trị đặt hàng trung bình cao hơn</h3>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>

        <div className="others-section">
          <div className="section-5-pay-first">
            <div className="section-container">
              <div className="wrapper-section-5">
                <div className="line">
                  <div className="line-1"></div>
                  <div className="line-2"></div>
                  <div className="line-3"></div>
                </div>
                <div className="title">
                  <h2>Tích hợp liền mạch với cửa hàng của bạn</h2>
                </div>
                <div className="description" style={{ position: "relative" }}>
                  <div className="top">
                    <div className="commercial-platform">
                      <div className="computer-phone"></div>
                    </div>
                    <div className="description-element">
                      <h3>Nền tảng thương mại</h3>
                      <p>
                        <strong>Levera Pay</strong> tích hợp với nền tảng Thương
                        mại điện tử của bạn một cách liền mạch, chỉ trong vài
                        phút.
                      </p>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="technique">
                      <div className="technique-levera"></div>
                    </div>
                    <div className="description-element">
                      <h3>Kỹ thuật</h3>
                      <p>
                        Nhóm hỗ trợ kỹ thuật của chúng tôi luôn đồng hành cùng
                        bạn mọi lúc.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-picture-section-5-pay-first"></div>
            </div>
          </div>

          <div className="section-6-merchant section-general">
            <div className="section-container">
              <div className="img-main-easy-shopping"></div>
              <div className="navigation-description">
                <div className="line">
                  <div className="line-1"></div>
                  <div className="line-2"></div>
                  <div className="line-3"></div>
                </div>

                <div className="title-big">
                  <h1>Chúng tôi tiên phong cách thanh toán công bằng hơn</h1>
                </div>
                <div className="description">
                  Giờ đây bạn có thể bán cho khách hàng với Levera Pay.
                </div>
              </div>
            </div>
          </div>

          <div className="section-6 section-7-merchant">
            <div className="section-container">
              <div className="line">
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
              </div>
              <div className="title">
                <h1>
                  Mua sắm cùng <strong>Levera Pay</strong>
                </h1>
              </div>
              <div className="description-short">
                SOME OF OUR TRUSTED CLIENTS
              </div>

              <div className="list-brands">
                <h3></h3>
                <FontAwesomeIcon icon={faCaretLeft} />
                <ul>
                  <li className="p1">
                    <div className="brand">
                      <div className="img-bg"></div>
                    </div>
                  </li>
                  <li className="p2">
                    <div className="img-background"></div>
                  </li>
                  <li className="p3">
                    <div className="brand">
                      <div className="img-bg"></div>
                    </div>
                  </li>
                  <FontAwesomeIcon icon={faCaretRight} />
                </ul>
              </div>
            </div>
          </div>

          <div className="last-section">
            <div className="section-container">
              <div className="paper-airplane">
                <FontAwesomeIcon icon={faPaperPlane} />
              </div>
              <div className="wrapper">
                <div className="online-shop">
                  <h2>Bạn có cửa hàng trực tuyến</h2>
                  <p>
                    Thêm lựa chọn thanh toán mà khách hàng của bạn hẳn sẽ thích!
                  </p>
                </div>

                <div className="button-get-start" onClick={handleLogin}>
                  <Button type="primary" size="large">
                    <h1>Get start</h1>
                  </Button>
                </div>
                <div className="circle circle-box-1">
                  <div className="circle-common circle-1"></div>
                  <div className="circle-common circle-2"></div>
                  <div className="circle-common circle-3"></div>
                  <div className="circle-common circle-4"></div>
                  <div className="circle-common circle-5"></div>
                  <div className="circle-common circle-6"></div>
                </div>
                <div className="circle circle-box-2">
                  <div className="circle-common circle-1"></div>
                  <div className="circle-common circle-2"></div>
                  <div className="circle-common circle-3"></div>
                  <div className="circle-common circle-4"></div>
                  <div className="circle-common circle-5"></div>
                  <div className="circle-common circle-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default levera(merchant);