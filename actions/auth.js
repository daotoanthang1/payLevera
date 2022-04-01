import axios from "axios";

export const showUser = (id, accessToken) => (dispatch) => {
  return axios
    .get(`${API_BASE}/users/${id}?access_token=${accessToken}`)
    .then((res) => {
      const user = res.data.data;
      user.accessToken = accessToken;
      dispatch({ type: "auth.user", payload: user });
    });
};