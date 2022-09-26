import { SERVER_URL } from "../Constants";
import { showToast, ToastType } from "../common/toast";

const RequestApi = async (url, option) => {
  return await fetch(SERVER_URL + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(option),
  })
    .then((response) => {
      return response.json();
    })
    .catch((e) => {
      console.log("api fetch  fail");
      showToast(ToastType.ERROR, "系統忙碌中...");
    });
};

export default RequestApi;
