import { SUCCESS, ERROR, WARNING } from "./actionTypes";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function successAction(text_message) {
  toast.success(text_message, {
    position: toast.POSITION.TOP_RIGHT,
  });
}
function warningAction(text_message) {
  toast.warn(text_message, {
    position: toast.POSITION.TOP_RIGHT,
  });
}
function errorAction(text_message) {
  toast.error(text_message, {
    position: toast.POSITION.TOP_RIGHT,
  });
}

export const ResponseToastHandler = async (state, text_success, text_fail) => {
  if (state) {
    if (!state.isLoading && state.success && !state.rejected) {
      {
        successAction(text_success);
      }
    } else if (!state.isLoading && !state.success && state.rejected) {
      errorAction(text_fail);
    }
  }
};
