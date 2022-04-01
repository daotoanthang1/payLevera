import { CheckCircleTwoTone, PlusOutlined } from "@ant-design/icons";
import levera from "hocs/whoami";
import Layout from "components/Layouts";
import { Button, Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretLeft,
  faCaretRight,
  faPaperPlane,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const FAQ = () => {
  const [isHiddenDes1, setIsHiddenDes1] = useState(true);
  const [isHiddenDes2, setIsHiddenDes2] = useState(false);
  const [isHiddenDes3, setIsHiddenDes3] = useState(false);
  const [isHiddenDes4, setIsHiddenDes4] = useState(false);
  const isBigScreen = useMediaQuery({ query: "(min-width:769px)" });
  const listOptions = () => {
    if (isBigScreen) {
      return (
        <div className="right-list-topic">
          <div className="section section-1">
            <div className="title">
              <h3>Levera hoạt động như thế nào?</h3>
            </div>
            <div className="lines"></div>
            {isHiddenDes1 == true ? (
              <div className="description">
                <p>
                  Sau khi mua hàng, bạn có thể quyết định trả tiền sản phẩm
                  trong vòng <strong>14 ngày</strong>.
                </p>
                <p>
                  Bạn có thể chọn trả hết hoặc chia thành{" "}
                  <strong>6 kỳ thanh toán bằng nhau</strong> sau đó. Bạn sẽ
                  thanh toán <strong>1/6 giá trị đơn hàng</strong> sau mỗi tháng
                  (30 ngày) .
                </p>
              </div>
            ) : null}
          </div>

          <div className="section section-2" style={{ top: "200px" }}>
            <div className="title">
              <h3>Levera tính phí như thế nào?</h3>
            </div>
            <div className="lines"></div>
            {isHiddenDes2 == false ? (
              <div className="description">
                <p>
                  Levera <strong>miễn phí hoàn toàn trong 14 ngày đầu</strong>.
                  Sau 14 ngày, nếu khách hàng chọn thanh toán trả sau, lãi suất
                  được tính <strong>12%/năm</strong>&nbsp; dựa trên dư nợ giảm
                  dần.
                </p>
                <div className="example-product">
                  <p>
                    <b>Ví dụ:</b>&nbsp;Hạnh mua 1 chiếc áo giá 600k và chọn
                    thanh toán trả sau sẽ được chia thành 6 kỳ thanh toán như
                    sau:
                  </p>
                  <ul>
                    <li>
                      <p>Kỳ đầu tiên: 100k (tiền gốc) + 6k (lãi suất)</p>
                    </li>
                    <li>
                      <p>Kỳ thứ 2: 100k (tiền gốc) + 5k (lãi suất)</p>
                    </li>
                    <li>
                      <p>Kỳ thứ 3: 100k (tiền gốc) + 4k (lãi suất)</p>
                    </li>
                    <li>
                      <p>Kỳ thứ 4: 100k (tiền gốc) + 3k (lãi suất)</p>
                    </li>
                    <li>
                      <p>Kỳ thứ 5: 100k (tiền gốc) + 2k (lãi suất)</p>
                    </li>
                    <li>
                      <p>Kỳ thứ 6: 100k (tiền gốc) + 1k (lãi suất)</p>
                    </li>
                  </ul>
                </div>
              </div>
            ) : null}
          </div>

          <div className="section section-3" style={{ top: "550px" }}>
            <div className="title">
              <h3 style={{ width: "auto" }}>
                Nếu tôi quên hoặc thanh toán chậm thì sẽ như thế nào?
              </h3>
            </div>
            <div className="lines"></div>
            {isHiddenDes3 == false ? (
              <div className="description">
                <p>
                  Nếu bạn thanh toán chậm so với ngày thanh toán được quy định,
                  bạn sẽ phải thanh toán một khoản phạt tương đương{" "}
                  <strong>lãi suất cơ bản</strong>.Tổng số tiền phạt tối đa lên
                  đến <strong>40% giá trị sản phẩm</strong> bạn mua.
                </p>
              </div>
            ) : null}
          </div>

          <div className="section section-4" style={{ top: "700px" }}>
            <div className="title">
              <h3 style={{ width: "auto" }}>
                Tôi thanh toán trả góp cho Levera như thế nào?
              </h3>
            </div>
            <div className="lines"></div>
            {isHiddenDes4 == false ? (
              <div className="description">
                <p>
                  Nếu bạn thanh toán chậm so với ngày thanh toán được quy định,
                  bạn sẽ phải thanh toán 1 khoản phạt tương đương{" "}
                  <strong>lãi suất cơ bản</strong>.Tổng số tiền phạt tối đa lên
                  đến <strong>40% giá trị sản phẩm bạn mua.</strong>
                </p>
              </div>
            ) : null}
          </div>
        </div>
      );
    } else {
      return (
        <div className="right-list-topic">
          <div className="section section-1">
            <div className="title">
              <h3>Levera hoạt động như thế nào?</h3>
            </div>
            <div className="lines"></div>
            <div className="plus" onClick={isDropDown1}></div>
            {isHiddenDes1 == true ? (
              <div className="description">
                <p>
                  Sau khi mua hàng, bạn có thể quyết định trả tiền sản phẩm
                  trong vòng <strong>14 ngày</strong>.
                </p>
                <p>
                  Bạn có thể chọn trả hết hoặc chia thành{" "}
                  <strong>6 kỳ thanh toán bằng nhau</strong> sau đó. Bạn sẽ
                  thanh toán <strong>1/6 giá trị đơn hàng</strong> sau mỗi tháng
                  (30 ngày) .
                </p>
              </div>
            ) : null}
          </div>

          <div className="section section-2" style={{ top: "200px" }}>
            <div className="title">
              <h3>Levera tính phí như thế nào?</h3>
            </div>
            <div className="lines"></div>
            <div className="plus" onClick={isDropDown2}></div>
            {isHiddenDes2 == false ? (
              <div className="description">
                <p>
                  Levera <strong>miễn phí hoàn toàn trong 14 ngày đầu</strong>.
                  Sau 14 ngày, nếu khách hàng chọn thanh toán trả sau, lãi suất
                  được tính <strong>12%/năm</strong>&nbsp; dựa trên dư nợ giảm
                  dần.
                </p>
                <div className="example-product">
                  <p>
                    <b>Ví dụ:</b>&nbsp;Hạnh mua 1 chiếc áo giá 600k và chọn
                    thanh toán trả sau sẽ được chia thành 6 kỳ thanh toán như
                    sau:
                  </p>
                  <ul>
                    <li>
                      <p>Kỳ đầu tiên: 100k (tiền gốc) + 6k (lãi suất)</p>
                    </li>
                    <li>
                      <p>Kỳ thứ 2: 100k (tiền gốc) + 5k (lãi suất)</p>
                    </li>
                    <li>
                      <p>Kỳ thứ 3: 100k (tiền gốc) + 4k (lãi suất)</p>
                    </li>
                    <li>
                      <p>Kỳ thứ 4: 100k (tiền gốc) + 3k (lãi suất)</p>
                    </li>
                    <li>
                      <p>Kỳ thứ 5: 100k (tiền gốc) + 2k (lãi suất)</p>
                    </li>
                    <li>
                      <p>Kỳ thứ 6: 100k (tiền gốc) + 1k (lãi suất)</p>
                    </li>
                  </ul>
                </div>
              </div>
            ) : null}
          </div>

          <div className="section section-3" style={{ top: "550px" }}>
            <div className="title">
              <h3 style={{ width: "auto" }}>
                Nếu tôi quên hoặc thanh toán chậm thì sẽ như thế nào?
              </h3>
            </div>
            <div className="lines"></div>
            <div className="plus" onClick={isDropDown3}></div>
            {isHiddenDes3 == false ? (
              <div className="description">
                <p>
                  Nếu bạn thanh toán chậm so với ngày thanh toán được quy định,
                  bạn sẽ phải thanh toán một khoản phạt tương đương{" "}
                  <strong>lãi suất cơ bản</strong>.Tổng số tiền phạt tối đa lên
                  đến <strong>40% giá trị sản phẩm</strong> bạn mua.
                </p>
              </div>
            ) : null}
          </div>

          <div className="section section-4" style={{ top: "700px" }}>
            <div className="title">
              <h3 style={{ width: "auto" }}>
                Tôi thanh toán trả góp cho Levera như thế nào?
              </h3>
            </div>
            <div className="lines"></div>
            <div className="plus" onClick={isDropDown4}></div>
            {isHiddenDes4 == false ? (
              <div className="description">
                <p>
                  Nếu bạn thanh toán chậm so với ngày thanh toán được quy định,
                  bạn sẽ phải thanh toán 1 khoản phạt tương đương{" "}
                  <strong>lãi suất cơ bản</strong>.Tổng số tiền phạt tối đa lên
                  đến <strong>40% giá trị sản phẩm bạn mua.</strong>
                </p>
              </div>
            ) : null}
          </div>
        </div>
      );
    }
  };
  const isDropDown1 = (e) => {
    setIsHiddenDes1(!isHiddenDes1);
    console.log(e.target);
    if (isHiddenDes1 == true) {
      e.target.classList.add("changeXagain");
      e.target.classList.remove("changeX");
    } else {
      e.target.classList.remove("changeXagain");
      e.target.classList.add("changeX");
    }
  };
  const isDropDown2 = (e) => {
    setIsHiddenDes2(!isHiddenDes2);
    if (isHiddenDes2 == true) {
      e.target.classList.add("changeX");
      e.target.classList.remove("changeXagain");
    } else {
      e.target.classList.remove("changeX");
      e.target.classList.add("changeXagain");
    }
  };
  const isDropDown3 = (e) => {
    setIsHiddenDes3(!isHiddenDes3);
    if (isHiddenDes3 == true) {
      e.target.classList.add("changeX");
      e.target.classList.remove("changeXagain");
    } else {
      e.target.classList.remove("changeX");
      e.target.classList.add("changeXagain");
    }
  };
  const isDropDown4 = (e) => {
    setIsHiddenDes4(!isHiddenDes4);
    if (isHiddenDes4 == true) {
      e.target.classList.add("changeX");
      e.target.classList.remove("changeXagain");
    } else {
      e.target.classList.remove("changeX");
      e.target.classList.add("changeXagain");
    }
  };
  return (
    <Layout>
      <div className="body-FAQ">
        <div className="section-first">
          <div className="section-container">
            <p className="title">How can we help?</p>
            <h2>Questions...</h2>
            <div className="search">
              <FontAwesomeIcon icon={faSearch} />
              <Input placeholder="Search" style={{ paddingLeft: "50px" }} />
              <div className="button-get-start">
                <Button type="primary" size="large">
                  <h1>Tìm kiếm</h1>
                </Button>
              </div>
            </div>

            <div className="description">
              <p>
                Hi you, if you have questions or at point you're confused or too
                annoyed to dig through this page to find the answer you,re
                looking for, just call or email us{" "}
                <strong>helpme@leverapay.com.</strong> We want to help you
                answer all your questions.
              </p>
              <p>
                Here are the most frequently asked questions of the universe
              </p>
            </div>
            <div className="list-topic">
              <div className="left-list-topic">
                <ul>
                  <li>
                    <p className="active">Tất cả</p>
                  </li>
                  <li>
                    <p style={{ paddingLeft: "63px", color: "#828282" }}>
                      Hoạt động
                    </p>
                  </li>
                  <li>
                    <p style={{ paddingLeft: "63px", color: "#828282" }}>
                      Payments
                    </p>
                  </li>
                  <li>
                    <p style={{ paddingLeft: "79px", color: "#828282" }}>
                      Khác
                    </p>
                  </li>
                </ul>
              </div>
              {listOptions()}
            </div>
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

              <div className="button-get-start">
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
export default levera(FAQ);