import axios from "axios";
export const fetchPurchase = (params) => (dispatch, getState) => {
  const accessToken = getState().auth.user.accessToken;
  const url = `${API_BASE}/user/purchase?access_token=${accessToken}`;
  return axios.get(url, { params }).then((res) => {
    dispatch({
      type: "FETCH_PURCHASE",
      payload: res.data,
    });
  });
};
