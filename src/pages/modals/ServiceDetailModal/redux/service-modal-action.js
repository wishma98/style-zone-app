import ServiceDetailsReducer from "./service-modal-reducer";

export const openServicesDetailsModal = (payload) => (dispatch) => {
  dispatch(ServiceDetailsReducer.actions.openServicesDetailsModal(payload));
};

export const closeServicesDetailsModal = () => (dispatch) => {
  dispatch(ServiceDetailsReducer.actions.closeServicesDetails());
};
