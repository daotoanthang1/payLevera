import { SyncOutlined } from "@ant-design/icons";
import { getAccounts } from "actions";
import { Button, Table, Avatar } from "antd";
import levera from "hocs/whoami";
import { Component } from "react";
import { formatDateTime } from "utils";
import { connect } from "react-redux";
const defaultParams = {
  page: 1,
  pageSize: 30,
};

class Account extends Component {
  static pageInfo = {
    title: "Quản lí tài khoản",
  };

  constructor(props) {
    super(props);
    this.state = {
      params: { ...defaultParams },
      isLoading: false,
    };
  }

  componentDidMount() {
    this.getAccounts();
  }

  getAccounts = async (filter = {}) => {
    const { user } = this.props;
    this.setState({ isLoading: true });
    const { getAccounts } = this.props;
    const params = filter ? { ...this.state.params, ...filter } : defaultParams;
    await getAccounts(user.accessToken);
    this.setState({ params, isLoading: false });
  };

  onSyncClick = () => {
    this.getAccounts();
  };

  columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Tài khoản",
      dataIndex: "account",
      width: "15%",
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "15%",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone_number",
      width: "15%",
    },
    {
      title: "Chế độ",
      dataIndex: "regime",
      width: "10%",
      align: "center",
    },
    {
      title: "Ngày đăng kí",
      dataIndex: "insertedAt",
      width: "10%",
      align: "center",
    },
  ];

  getData = () => {
    const { accounts } = this.props;
    let data = [];
    if (!accounts) return data;

    data = accounts?.map((item) => {
      return {
        key: item.id,
        id: item.id,
        email: item.email,
        phone_number: item.phone_number,
        regime: item.role,
        account: this.renderName(item),
        insertedAt: formatDateTime(item.inserted_at),
      };
    });

    return data;
  };

  renderName = (account) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          src={account.avatar}
          size={25}
          style={{ marginRight: 10 }}
        />
        <div style={{ fontWeight: 500 }}>{account.name}</div>
      </div>
    )
  }

  render() {
    const { isLoading } = this.state;
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
          scroll={{ y: "calc(100vh - 225px)" }}
          bordered
          loading={isLoading}
          pagination={false}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ auth, manage }) => ({
  accounts: manage.accounts,
  user: auth.user,
});

export default connect(mapStateToProps, { getAccounts })(levera(Account));
