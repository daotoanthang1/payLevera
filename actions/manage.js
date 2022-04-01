import axios from "axios";

export const getActiveShops = (params) => (dispatch, getState) => {
  const accessToken = getState().auth.user.accessToken;
  const url = `${API_BASE}/admin/get_active_shops?access_token=${accessToken}`;
  return axios.get(url, { params }).then(res => {
    dispatch({ 
      type: 'GET_ACTIVE_SHOPS',
      payload: res.data.data
    })
  })
}

export const updateActiveShops = (params) => (dispatch, getState) => {
  const accessToken = getState().auth.user.accessToken;
  const url = `${API_BASE}/admin/update_active_shops?access_token=${accessToken}`;
  return axios.post(url, params).then(res => {
    dispatch({ 
      type: 'UPDATE_ACTIVE_SHOP',
      payload: res.data.data
    })
  })
}

export const getAccounts = () => (dispatch, getState) => {
  const accessToken = getState().auth.user.accessToken;
  const url = `${API_BASE}/admin/get_accounts?access_token=${accessToken}`;

  return axios.post(url).then((res) => {
      dispatch({
        type: "GET_ACCOUNTS",
        payload: res.data.data
      });
    });
};
