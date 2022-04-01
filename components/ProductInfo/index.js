import { Popover } from "antd";
import { formatMoney } from "utils";

const ProductInfo = ({ item }) => {
  const productItem = (item) => {
    return (
      <div key={item.key}>
        <span>{item.name}</span>&nbsp;
        {item.attributes ? "-" : ""}&nbsp;
        <span style={{ color: "#1890ff", textAlign: "center" }}>
          {item.attributes}
        </span>
        &nbsp; {item.attributes ? "-" : ""}&nbsp;
        <span>
          {formatMoney(item.price)} x {item.quantity}
        </span>
      </div>
    );
  };

  if (item?.length > 2) {
    const content = <div>{item.map((item) => productItem(item))}</div>;
    return (
      <Popover content={content} title="Sản phẩm chi tiết" trigger="hover">
        <span
          style={{ color: "#1890ff", cursor: "pointer", textAlign: "left" }}
        >
          Nhiều sản phẩm
        </span>
      </Popover>
    );
  } else {
    return <div>{item?.map((item) => productItem(item))}</div>;
  }
};
export default ProductInfo;
