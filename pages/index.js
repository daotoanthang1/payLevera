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

const customers = () => {
  const handleLogin = () =>
    (document.location = `https://id.pancake.vn/oauth2/authorize?grant_type=code&client_id=${APP_ID}&redirect_uri=${API_BASE}/users/login&scope=avatar,email,subscriptions&locale=vi`);
  const handleRegister = () =>
    (document.location = `https://id.pancake.vn/signup?redirect_uri=http%3A%2F%2Fid.pancake.vn%2Foauth2%2Fauthorize%3Fgrant_type%3Dcode%26client_id%3D226eb5dba26c4e7b986794dc7f6c284c%26redirect_uri%3Dhttp%3A%2F%2Flocalhost%3A2099%2Fapi%2Fusers%2Flogin%26scope%3Davatar%2Cemail%2Csubscriptions%26force%3Dtrue`);

  return (
    <Layout>
      <div className="body-customers">
        <div className="section-1-purchase">
          <div className="section-container">
            <div className="title">
              <h4>Mua trước trả sau</h4>
            </div>

            <div className="description-main">
              <h1>Trả sau&nbsp;</h1>
              <h1 className="levera-pay-text">Levera/Pay</h1>
            </div>

            <div className="description-element">
              <h5>
                Chọn Levera/pay tại khâu thanh toán, xác nhận trên ứng dụng,
                nhận hàng ngay. Thanh toán sau 14 ngày hoặc chia thành 6 lần
                thanh toán trong 6 tháng
              </h5>
            </div>

            <div className="button-elements">
              <div className="button-get-start" onClick={handleLogin}>
                <Button type="primary" size="large">
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
              <ul style={{ listStyle: "none" }}>
                <li>
                  <div className="element-action e1">
                    <div className="number">01</div>
                    <div className="icon-action">
                      <div className="customer-2-1"></div>
                    </div>

                    <p className="p-specific">
                      Chia đơn thành nhiều đợt bằng nhau
                    </p>
                  </div>
                </li>

                <li>
                  <div className="element-action e2">
                    <div className="number">02</div>
                    <div className="icon-action">
                      <div className="customer-2-2"></div>
                    </div>

                    <p className="p-specific">
                      Sau khi nhận hàng, có thể quyết định thanh toán ngay hoặc
                      chia thành 6 đợt thanh toán.
                    </p>
                  </div>
                </li>

                <li>
                  <div className="element-action e3">
                    <div className="number">03</div>
                    <div className="icon-action">
                      <div className="customer-2-3"></div>
                    </div>

                    <p className="p-specific">
                      Nhận thông tin chi tiết về đơn hàng, lịch sử thanh toán
                      đầy đủ thông qua ứng dụng
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
                <h2>Mua sắm ngay hôm nay và trả sau với Levera Pay.</h2>
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

        <div className="section-4-buy">
          <div className="section-container">
            <div className="wrapper-description">
              <div className="line">
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
              </div>
              <div className="title">
                <h2>Mua sắm thoả thích Trả tiền sau</h2>
              </div>
              <div className="description">
                <ul>
                  <li>
                    <div className="box-description-buy">
                      <div
                        className="platform-des"
                        style={{ background: "#ff6262" }}
                      >
                        <div className="card-check"></div>
                      </div>
                      <h5 style={{ width: "193px", height: "22px" }}>
                        Thanh toán sau tuỳ chọn
                      </h5>
                      <p>
                        <strong>Levera Pay</strong>&nbsp; cho phép bạn mua sắm
                        những thứ bạn yêu thích ngay hôm nay và thanh toán sau
                        theo tùy chọn bạn muốn.
                      </p>
                    </div>
                  </li>

                  <li>
                    <div className="box-description-buy buy-2">
                      <div
                        className="platform-des"
                        style={{ background: "#3949AB" }}
                      >
                        <div className="application-icon"></div>
                      </div>
                      <h5 style={{ left: "96px", top: "24px" }}>
                        Ứng dụng Levera Pay
                      </h5>
                      <p>
                        Bạn có thể sử dụng ứng dụng <strong>Levera Pay</strong>
                        &nbsp;để mua sắm, kiểm tra lịch sử giao dịch, nhận thông
                        báo nhắc nhở về các hóa đơn cần được thanh toán.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="section-5-pay-first">
          <div className="section-container">
            <div className="wrapper-section-5">
              <div className="line">
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
              </div>
              <div className="title">
                Thanh toán lần đầu tiên sau khi bạn nhận được hàng
              </div>
              <div className="description">
                <p>
                  Bạn có thể sử dụng ứng dụng Levera Pay để mua sắm, kiểm tra
                  lịch sử giao dịch và nhận thông báo nhắc nhở về các hoá đơn
                  cần được thanh toán.
                </p>
              </div>
            </div>
            <div className="main-picture-section-5-pay-first"></div>
          </div>
        </div>

        <div className="section-6">
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

            <div className="description-short">SOME OF OUR TRUSTED CLIENTS</div>

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
                <h2>Mua sắm ngay, thanh toán sau</h2>
                <p>Thêm lựa chọn thanh toán mà bạn hẳn sẽ thích!</p>
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
    </Layout>
  );
};
export default levera(customers);
