import moment from 'moment'

export const formatMoney = (number, opts = {}) => {
  number = number || 0;
  number = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    ...opts,
  }).format(number);
  return number;
};

export const formatDateTime = (dateTime) => {
  return moment.utc(dateTime).utcOffset(7.0).format("HH:mm DD/MM/YYYY");
};

export const formatQuantity = (value, suffix) => {
  value = `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  return suffix ? `${value} ${suffix}` : value
}