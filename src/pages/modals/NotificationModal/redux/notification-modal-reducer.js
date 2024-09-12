import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenNotificationModal: false,
  notificationData: "",
};

const NotificationReducer = createSlice({
  name: "NotificationReducer",
  initialState: initialState,
  reducers: {
    openNotificationModal: (state, { payload }) => {
      console.log({ payload });
      return {
        ...state,
        isOpenNotificationModal: true,
        notificationData: payload,
      };
    },
    closeNotificationModal: (state) => {
      return {
        ...state,
        isOpenNotificationModal: false,
        notificationData: "",
      };
    },
  },
});

export default NotificationReducer;
