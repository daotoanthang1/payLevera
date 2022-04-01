import { combineReducers } from "redux";
import auth from "./auth";
import portal from "./portal";
import purchase from "./purchase";
import manage from "./manage";

export default combineReducers({ auth, portal, purchase, manage });
