import { createSlice } from "@reduxjs/toolkit";

export const Modal = createSlice({
  name: "Modal",
  initialState: {
    modalType: "",
    title: "",
    open: false,
    sendId: false,
    apiFuncCallback: null,
    data: null,
  },
  reducers: {
    openModal: (state, action) => {
      state.modalType = action.payload.modalType;
      state.title = action.payload.title;
      state.open = true;
      state.sendId = action.payload.sendId;
      state.apiFuncCallback = action.payload.apiFuncCallback;
      state.data = action.payload.data;
    },
    closeModal: (state) => {
      state.modalType = "";
      state.title = "";
      state.open = false;
      state.sendId = false;
      state.apiFuncCallback = null;
      state.data = null;
    },
  },
});

export const { openModal, closeModal } = Modal.actions;

export default Modal.reducer;
