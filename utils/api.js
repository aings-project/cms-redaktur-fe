const api = (() => {
  const BASE_URL = "";

  function putAccessToken(token) {
    localStorage.setItem("accessToken", token);
  }

  function getAccessToken() {
    return localStorage.getItem("accessToken");
  }

  async function fetchWithAuth(url, options = {}) {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
  }

  async function login({ email, password }) {
    const response = await fetch(`${BASE_URL}/v1/auth/login/email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const responseJson = await response.json();

    const { error } = responseJson;

    if (error) {
      const { message } = error;
      throw new Error(message);
    }

    const {
      jwt: { token },
    } = responseJson;

    return token;
  }

  async function getOwnProfile() {
    const response = await fetchWithAuth(`${BASE_URL}/v1/auth/user`);

    const responseJson = await response.json();

    const { error } = responseJson;

    if (error) {
      const { message } = error;
      throw new Error(message);
    }

    const { user } = responseJson;

    return user;
  }

  async function getAllNewsDraft() {
    const response = await fetchWithAuth(`${BASE_URL}/news_draft`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseJson = await response.json();

    const { error } = responseJson;

    if (error) {
      const { message } = error;
      throw new Error(message);
    }

    return responseJson;
  }

  async function getDetailNewsDraft({ draft_id, version }) {
    const response = await fetchWithAuth(
      `${BASE_URL}/news_draft/${draft_id}/${version}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const responseJson = await response.json();

    const { error } = responseJson;

    if (error) {
      const { message } = error;
      throw new Error(message);
    }

    return responseJson;
  }

  async function updateNewsDraft({ title, content, status, id }) {
    const response = await fetchWithAuth(`${BASE_URL}/news_draft/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
        status,
      }),
    });

    const responseJson = await response.json();

    const { error } = responseJson;

    if (error) {
      const { message } = error;
      throw new Error(message);
    }

    return responseJson;
  }

  async function validateNewsDraft({ id, content }) {
    if (content) {
      const response = await fetchWithAuth(`${BASE_URL}/validate/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
          status,
        }),
      });

      const responseJson = await response.json();

      const { error } = responseJson;

      if (error) {
        const { message } = error;
        throw new Error(message);
      }

      return responseJson;
    }
    const response = await fetchWithAuth(`${BASE_URL}/validate/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseJson = await response.json();

    const { error } = responseJson;

    if (error) {
      const { message } = error;
      throw new Error(message);
    }

    return responseJson;
  }

  return {
    putAccessToken,
    getAccessToken,
    login,
    getOwnProfile,
    getAllNewsDraft,
    getDetailNewsDraft,
    updateNewsDraft,
    validateNewsDraft,
  };
})();

export default api;
