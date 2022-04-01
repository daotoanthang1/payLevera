import { Component } from "react";
import { Table, Button, Tag } from "antd";
import levera from "hocs/whoami";
import { connect } from "react-redux";
import { SyncOutlined } from "@ant-design/icons";
import { fetchPortals } from "actions";
import { formatDateTime } from "utils";
import SummaryInfo from "components/SummaryInfo";
import ProductInfo from "components/ProductInfo";

const defaultParams = {
  page: 1,
  pageSize: 30,
};

class Portal extends Component {
  static pageInfo = {
    title: "Cổng thông tin",
  };

  constructor(props) {
    super(props);
    this.state = {
      params: { ...defaultParams },
      isLoading: false,
    };
  }

  componentDidMount() {
    this.fetchPortals();
  }

  fetchPortals = async (filter = {}) => {
    this.setState({ isLoading: true });
    const { fetchPortals } = this.props;
    const params = filter ? { ...this.state.params, ...filter } : defaultParams;
    await fetchPortals(params);
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
      case "pending":
        obj = {
          color: "#faad14",
          text: "Chờ xác nhận",
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
    this.fetchPortals();
  };

  columns = [
    {
      title: "Levera ID",
      dataIndex: "index",
      width: "4%",
      align: "left",
    },
    {
      title: "Tên shop",
      dataIndex: "shopName",
      width: "15%",
    },
    {
      title: "Sản phẩm",
      dataIndex: "productInfo",
      width: "25%",
    },
    {
      title: "Thời gian tạo",
      dataIndex: "insertedAt",
      width: "8%",
      align: "right",
    },
    {
      title: "Tổng thanh toán",
      dataIndex: "summaryProduct",
      width: "8%",
      align: "right",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      width: "6%",
      align: "center",
      filters: [
        { text: "Chấp nhận", value: "apply" },
        { text: "Chờ xác nhận", value: "pending" },
        { text: "Từ chối", value: "deny" },
      ],
    },
  ];

  getData = () => {
    const { portal } = this.props;
    let data = [];
    data = (portal.data || []).map((item) => {
      return {
        key: item.id,
        index: item.id,
        shopName: item.shop_name,
        status: this.renderStatus(item.status),
        insertedAt: formatDateTime(item.inserted_at),
        productInfo: <ProductInfo item={item.product_info} />,
        summaryProduct: <SummaryInfo summary={item.summary || {}} />,
      };
    });
    return data;
  };
  handlePage = (pagination) => {
    this.fetchPortals({
      page: pagination.current,
      pageSize: pagination.pageSize,
    });
  };
  render() {
    const { portal } = this.props;
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
            total: portal.total_entries,
            current: params.page_number,
            showTitle: true,
            size: "small",
            pageSizeOptions: ['10', '30', '50', '100'],
            locale: { items_per_page: "/ trang" }
          }}
          onChange={this.handlePage}
          scroll={{ y: "calc(100vh - 250px)" }}
          bordered
          loading={isLoading}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  portal: state.portal.data,
});

export default connect(mapStateToProps, { fetchPortals })(levera(Portal));
