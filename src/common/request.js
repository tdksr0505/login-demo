import { SERVER_URL } from '../Constants';
export default Request = async (url, option) => {
  return await fetch(SERVER_URL + url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(option),
  }).then((response) => {
    return response.json();
  });
};
