import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenServicesDetailsModal: false,
  servicesData: "",
};

const ServiceDetailsReducer = createSlice({
  name: "ServiceDetailsReducer",
  initialState: initialState,
  reducers: {
    openServicesDetailsModal: (state, { payload }) => {
      console.log("open", payload);
      return {
        ...state,
        isOpenServicesDetailsModal: true,
        servicesData: payload,
      };
    },
    closeServicesDetails: (state) => {
      return {
        ...state,
        isOpenServicesDetailsModal: false,
        servicesData: "",
      };
    },
  },
});

export default ServiceDetailsReducer;
