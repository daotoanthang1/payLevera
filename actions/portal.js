import axios from "axios";

export const fetchPortals = (params) => (dispatch, getState) => {
  const accessToken = getState().auth.user.accessToken;
  const url = `${API_BASE}/admin/portals?access_token=${accessToken}`;
  return axios.get(url, { params }).then((res) => {
    dispatch({
      type: "FETCH_PORTALS",
      payload: res.data,
    });
  });
};