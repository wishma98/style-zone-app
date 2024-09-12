import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initialState = {
  isOpenBankDetails: false,
  bankAccountData: "",
  isBankDetails: false,
  isAdminVerification: false,
  isAddDocumentType: false,
  title: "",
};

const ServiceDetailsReducer = createSlice({
  name: "ServiceDetailsReducer",
  initialState: initialState,
  reducers: {
    openBankDetails: (state, { payload }) => {
      console.log("open", state.isOpenBankDetails);
      return {
        ...state,
        isOpenBankDetails: true,
        title: payload.title,
      };
    },
    setDocumentType: (state, { payload }) => {
      console.log("get", payload);
      return {
        ...state,
        isAddDocumentType: true,
      };
    },
    setBankAccountData: (state, { payload }) => {
      console.log("get", payload);
      return {
        ...state,
        bankAccountData: payload,
        isBankDetails: true,
        isAdminVerification: true,
        isOpenBankDetails: false,
      };
    },
    closeBankDetails: (state) => {
      return {
        ...state,
        isOpenBankDetails: false,
        isAddDocumentType: false,
      };
    },
    clearBankDetails: (state) => {
      return {
        ...state,
        bankAccountData: "",
        isBankDetails: false,
        isAdminVerification: false,
      };
    },
  },
});

export default ServiceDetailsReducer;
