import { Component } from "react";
import { Table, Button, Modal, Input, notification } from "antd";
import levera from "hocs/whoami";
import { connect } from "react-redux";
import { SyncOutlined, PlusOutlined } from "@ant-design/icons";
import { getActiveShops, updateActiveShops } from "actions";

const defaultParams = {
  page: 1,
  pageSize: 30,
};

class Manage extends Component {
  static pageInfo = {
    title: "Quản lý người bán",
  };

  constructor(props) {
    super(props);
    this.state = {
      params: { ...defaultParams },
      isLoading: false,
      visible: false,
      shopId: "",
    };
  }

  componentDidMount() {
    this.getActiveShops(false);
  }
  getActiveShops = async (filter = {}) => {
    this.setState({ isLoading: true });
    const { getActiveShops } = this.props;
    const params = filter ? { ...this.state.params, ...filter } : defaultParams;
    await getActiveShops(params);
    this.setState({ params, isLoading: false });
  };

  onSyncClick = () => {
    this.getActiveShops(false);
  };

  columns = [
    {
      title: "STT",
      dataIndex: "index",
      width: "10%",
      align: "center",
    },
    {
      title: "Shop ID",
      dataIndex: "shopId",
      width: "20%",
      align: "center",
    },
    {
      title: "Tên shop",
      dataIndex: "shopName",
      align: "center",
    },
    {
      title: "",
      dataIndex: "status",
      align: "center",
      width: "20%",
      render: (text, record, index) => {
        return (
          <Button
            danger
            onClick={() => this.handleActiveShops("deactive", record.shopId)}
          >
            Hủy kích hoạt
          </Button>
        );
      },
    },
  ];

  getData = () => {
    const { manage } = this.props;
    let data = [];
    data = (manage || []).map((item, index) => {
      return {
        key: index + 1,
        index: index + 1,
        shopName: item.name,
        shopId: item.shop_id,
      };
    });
    return data;
  };

  handleActiveShops = (action, shopId) => {
    const { updateActiveShops } = this.props;
    const reg = /^\d+$/;
    if (shopId.toString().match(reg)) {
      updateActiveShops({ action: action, shopId: shopId });
    } else {
      notification.error({
        message: "Lỗi",
        description: "Shop ID Phải là số",
        placement: "bottomRight",
      });
    }
    this.setState({ visible: false, shopId: "" });
  };

  handlePage = (pagination) => {
    const { params } = this.state;

    this.setState({
      ...params,
      page: pagination.current,
      pageSize: pagination.pageSize,
    });
  };

  render() {
    const { manage } = this.props;
    const { params, isLoading, visible, shopId } = this.state;
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
          &nbsp;
          <Button
            type="primary"
            onClick={() => this.setState({ visible: true })}
            style={{ borderRadius: 4, marginBottom: 10 }}
            icon={<PlusOutlined />}
          >
            Kích hoạt shop
          </Button>
        </div>
        <Table
          columns={this.columns}
          dataSource={this.getData()}
          pagination={{
            pageSize: params.pageSize,
            total: (manage || []).length,
            current: params.page_number,
            showTitle: true,
            size: "small",
            pageSizeOptions: ["10", "30", "50", "100"],
            locale: { items_per_page: "/ trang" },
          }}
          onChange={this.handlePage}
          scroll={{ y: "calc(100vh - 250px)" }}
          bordered
          loading={isLoading}
        />
        <Modal
          visible={visible}
          onCancel={() => this.setState({ visible: false, shopId: "" })}
          width={350}
          footer={false}
          className="active-shop-modal"
        >
          <div>
            <div style={{ marginBottom: 10 }}>Nhập shop ID</div>
            <Input
              value={shopId}
              onChange={(e) => this.setState({ shopId: e.target.value })}
            />
          </div>
          <div style={{ marginTop: 40, display: "flex" }}>
            <Button
              type="danger"
              onClick={() => this.setState({ visible: false, shopId: "" })}
              style={{ borderRadius: 4, width: "50%", marginRight: 10 }}
            >
              Hủy
            </Button>
            <Button
              type="primary"
              onClick={() => this.handleActiveShops("active", shopId)}
              style={{ borderRadius: 4, width: "50%" }}
            >
              Kích hoạt
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = ({ manage }) => ({
  manage: manage.shops,
});

export default connect(mapStateToProps, { getActiveShops, updateActiveShops })(
  levera(Manage)
);
