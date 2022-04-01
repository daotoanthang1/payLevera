import { SyncOutlined } from "@ant-design/icons";
import { showUser } from "actions";
import { Button, Input, Image, Upload } from "antd";
import levera from "hocs/whoami";
import { Component } from "react";
import { formatDateTime } from "utils";
import { connect } from "react-redux";
import moment from "moment";
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
    this.showUser();
  }

  showUser = async (filter = {}) => {
    const { user } = this.props;
    this.setState({ isLoading: true });
    const { showUser } = this.props;
    const params = filter ? { ...this.state.params, ...filter } : defaultParams;
    await showUser(user.id, user.accessToken);
    this.setState({ params, isLoading: false });
  };

  onSyncClick = () => {
    this.showUser();
  };

  columns = [
    {
      title: "ID",
      dataIndex: "id",
      width: "10%",
      align: "center",
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "15%",
      align: "center",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone_number",
      width: "15%",
      align: "center",
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
    const { user } = this.props;
    console.log(user);
    let data = [];
    data = {
      key: user.id,
      id: user.id,
      email: user.email,
      phone_number: user.phone_number,
      regime: user.role,
      insertedAt: formatDateTime(user.inserted_at),
    };
  };

  render() {
    const { user } = this.props;
    const props = {
      name: "file",
      action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
      headers: {
        authorization: "authorization-text",
      },
      onChange(info) {
        if (info.file.status !== "uploading") {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === "done") {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === "error") {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };
    return (
      <div>
        <Button
          type="primary"
          // onClick={() => this.onSyncClick()}
          style={{ borderRadius: 4, marginBottom: 10 }}
          icon={<SyncOutlined />}
        >
          Tải lại
        </Button>
        <div className="wrapper-account">
          <div className="box-account">
            <div className="text-info-account">
              <div className="element-info">
                <h3>Họ tên</h3>
                <Input value={user.name} readOnly />
              </div>
              <div className="element-info">
                <h3>Số điện thoại</h3>
                <Input value={user.phone_number} readOnly />
              </div>
              <div className="element-info">
                <h3>Email</h3>
                <Input value={user.email} readOnly />
              </div>
              <div className="element-info">
                <h3>Ngày đăng kí </h3>
                <Input
                  value={moment(user.inserted_at).format("MMM Do YY")}
                  readOnly
                />
              </div>
            </div>
            <div className="line-vertical"></div>
            <div className="avatar">
              <Image src={`${user.avatar}`} />
              <Upload {...props}>
                <Button>Click to Upload</Button>
              </Upload>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { showUser })(levera(Account));
