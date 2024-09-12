import NotificationReducer from "./notification-modal-reducer";

export const openNotificationModal = (payload) => (dispatch) => {
  dispatch(NotificationReducer.actions.openNotificationModal(payload));
};

export const closeNotificationModal = () => (dispatch) => {
  dispatch(NotificationReducer.actions.closeNotificationModal());
};
