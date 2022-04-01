import produce from "immer";

const initState = {
  data: [],
};

const portal = produce((draf, action) => {
  switch (action.type) {
    case "FETCH_PORTALS":
      draf.data = action.payload;
  }
}, initState);

export default portal;
