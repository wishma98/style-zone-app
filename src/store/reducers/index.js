import { combineReducers } from "redux";
import sessionStorage from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";
import NotificationReducer from "../../pages/modals/NotificationModal/redux/notification-modal-reducer";
import ServiceDetailsReducer from "../../pages/modals/ServiceDetailModal/redux/service-modal-reducer";

const rootReducer = combineReducers({
  notificationsReducer: persistReducer({key: "notificationsReducer", storage: sessionStorage}, NotificationReducer.reducer),
  serviceDetailsReducer: persistReducer({key: "serviceDetailsReducer", storage: sessionStorage}, ServiceDetailsReducer.reducer),
});

export default rootReducer;
