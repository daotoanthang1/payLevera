import produce from "immer";

const initState = {
  data: [],
};

const purchase = produce((draf, action) => {
  switch (action.type) {
    case "FETCH_PURCHASE":
      draf.data = action.payload;
  }
}, initState);

export default purchase;
