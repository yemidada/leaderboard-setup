class APIRequest {
  static baseUrl =
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

  get = async (link) => {
    const response = await fetch(`${APIRequest.baseUrl}${link}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return response.json();
  }

  post = async (url, body) => {
    const response = await fetch(`${APIRequest.baseUrl}${url}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return response.json();
  }
}

export default APIRequest;
