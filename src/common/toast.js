import { toast } from 'react-toastify';
const TOAST_POSITION = toast.POSITION.TOP_CENTER;
const AUTO_CLOSE = 3000;

export const ToastType = {
  SUCCESS: 'success',
  ERROR: 'error',
};

export const showToast = (toastType, msg) => {
  switch (toastType) {
    case ToastType.SUCCESS:
      toast.success(msg, {
        position: TOAST_POSITION,
        autoClose: AUTO_CLOSE,
      });
      break;
    case ToastType.ERROR:
    default:
      toast.error(msg, {
        position: TOAST_POSITION,
        autoClose: AUTO_CLOSE,
      });
      break;
  }
};
