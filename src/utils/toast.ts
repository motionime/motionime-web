import { ToastOptions, toast, ToastPosition } from "react-toastify";

const toastSetting: ToastOptions = {
  position: "top-right" as ToastPosition,
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

export const toastError = (message: string) => {
  return toast.error(message, toastSetting);
};

export const toastSuccess = (message: string) => {
  return toast.success(message, toastSetting);
};

export const toastInfo = (message: string) => {
  return toast.info(message, toastSetting);
};

export const toastWarning = (message: string) => {
  return toast.warning(message, toastSetting);
};
