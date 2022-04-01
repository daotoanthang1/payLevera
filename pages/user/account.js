import { SyncOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
import levera from "hocs/whoami";
import { Component } from "react";
import { connect } from "react-redux";
import { showUser } from "../../actions/auth";
const defaultParams = {
  page: 1,
  pageSize: 30,
};

class Account extends Component {
  static pageInfo = {
    title: "Tài khoản",
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  columns = [
    {
      title: "Tên người dùng",
      dataIndex: "name",
      width: "5%",
      align: "center",
      render: (name) => <span>{name}</span>,
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "7%",
      align: "center",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone_number",
      width: "12%",
    },

    {
      title: "Thời gian tạo",
      dataIndex: "insertedAt",
      width: "8%",
    },
  ];

  getData = () => {
    const { user } = this.props;
    let data = [];
    data = [
      {
        name: user.name,
        email: user.email,
        phone_number: user.phone_number,
        insertedAt: user.inserted_at,
      },
    ];
    return data;
  };
  render() {
    const { purchase } = this.props;
    const { isLoading } = this.state;
    return (
      <div>
        <a href="https://id.pancake.vn">
          <span
            style={{
              position: "absolute",
              top: "15px",
              left: "350px",
              color: "#1890ff",
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            Đổi mật khẩu
          </span>
        </a>

        <Table
          columns={this.columns}
          dataSource={this.getData()}
          bordered
          loading={isLoading}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { showUser })(levera(Account));
