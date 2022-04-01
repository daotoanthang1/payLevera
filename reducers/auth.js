import produce from "immer";

const initState = { init: false, user: null };

const auth = produce((draf, action) => {
  switch (action.type) {
    case "auth.user":
      draf.user = action.payload;
  }
}, initState);

export default auth;
