import { Popover } from "antd";
import { formatMoney } from "utils";

const SummaryInfo = ({ summary }) => {
  const subtotal = parseInt(summary.subtotal || 0);
  const total_tax = parseInt(summary.total_tax || 0);
  const shipping_cost = parseInt(summary.shipping_cost || 0);

  const total = subtotal + total_tax + shipping_cost;

  const content = (
    <div>
      <div>Subtotal: {formatMoney(subtotal)}</div>
      <div>Total Tax: {formatMoney(total_tax)}</div>
      <div>Shipping Cost: {formatMoney(shipping_cost)}</div>
    </div>
  );

  return (
    <Popover
      content={content}
      title="Chi phí chi tiết"
      trigger="hover"
    >
      <span
        style={{
          display: "block",
          color: "#1890ff",
          textAlign: "center",
          cursor: "pointer",
          textAlign: 'right'
        }}
      >
        {formatMoney(total)}
      </span>
    </Popover>
  );
};
export default SummaryInfo;