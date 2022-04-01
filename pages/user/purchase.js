import { SyncOutlined } from "@ant-design/icons";
import { Button, Table, Tag } from "antd";
import levera from "hocs/whoami";
import { Component } from "react";
import { connect } from "react-redux";
import { formatDateTime } from "utils";
import { fetchPurchase } from "actions";
import ProductInfo from "components/ProductInfo";
import SummaryInfo from "components/SummaryInfo";

const defaultParams = {
  page: 1,
  pageSize: 30,
};

class Purchase extends Component {
  static pageInfo = {
    title: "Đơn hàng",
  };

  constructor(props) {
    super(props);
    this.state = {
      params: { ...defaultParams },
      isLoading: false,
      isModalVisible: false,
    };
  }
  componentDidMount() {
    this.fetchPurchase();
  }

  fetchPurchase = async (filter = {}) => {
    this.setState({ isLoading: true });
    const { fetchPurchase } = this.props;
    const params = filter ? { ...this.state.params, ...filter } : defaultParams;
    await fetchPurchase(params);
    this.setState({ params, isLoading: false });
  };

  renderStatus = (status) => {
    let obj = {};
    switch (status) {
      case "apply":
        obj = {
          color: "#2db7f5",
          text: "Chấp nhận",
        };
        break;
      default:
        obj = {
          color: "#f50",
          text: "Từ chối",
        };
    }

    return <Tag color={obj.color}>{obj.text}</Tag>;
  };

  onSyncClick = () => {
    this.fetchPurchase();
  };

  columns = [
    {
      title: "Levera ID",
      dataIndex: "index",
      width: "5%",
    },
    {
      title: "Tên shop",
      dataIndex: "shopName",
      width: "7%",
    },
    {
      title: "Sản phẩm",
      dataIndex: "productInfo",
      width: "12%",
    },

    {
      title: "Thời gian tạo",
      dataIndex: "insertedAt",
      width: "8%",
      align: "right"
    },

    {
      title: "Phương thức thanh toán",
      dataIndex: "paymentMethod",
      width: "10%",
      align: "center",
    },
    {
      title: "Tổng số tiền",
      dataIndex: "summary",
      width: "10%"
    },
  ];

  getData = () => {
    const { purchase } = this.props;
    let data = [];
    data = (purchase.data || []).map((item) => {
      return {
        key: item.id,
        index: item.id,
        shopName: item.shop_name,
        status: this.renderStatus(item.status),
        insertedAt: formatDateTime(item.inserted_at),
        productInfo: <ProductInfo item={item.product_info} />,
        paymentMethod: <Tag color="#108ee9">{item.payment_method}</Tag>,
        summary: <SummaryInfo summary={item.summary || {}} />,
      };
    });
    return data;
  };
  handlePage = (pagination) => {
    this.fetchPurchase({
      page: pagination.current,
      pageSize: pagination.pageSize,
    });
  };
  render() {
    const { purchase } = this.props;
    const { params, isLoading } = this.state;
    return (
      <div className="content-container">
        <div className="tools-container">
          <Button
            type="primary"
            onClick={() => this.onSyncClick()}
            style={{ borderRadius: 4, marginBottom: 10 }}
            icon={<SyncOutlined />}
          >
            Tải lại
          </Button>
        </div>
        <Table
          columns={this.columns}
          dataSource={this.getData()}
          pagination={{
            pageSize: params.pageSize,
            total: purchase.total_entries,
            current: params.page_number,
            showTitle: true,
            size: "small",
            pageSizeOptions: ['10', '30', '50', '100'],
            locale: { items_per_page: "/ trang" }
          }}
          onChange={(pagination) => this.handlePage(pagination)}
          scroll={{ y: "calc(100vh - 225px)" }}
          bordered
          loading={isLoading}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  purchase: state.purchase.data,
});

export default connect(mapStateToProps, { fetchPurchase })(levera(Purchase));
