const api = (() => {
  const BASE_URL = "https://redaktur-backend.et.r.appspot.com";

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

  async function getAllNewsDraft({ status, page = "1", limit = "10" } = {}) {
    const response = await fetchWithAuth(
      `${BASE_URL}/v1/draft-berita?page=${page}&limit=${limit}${
        status ? `&status=${status}` : ""
      }`,
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

  async function getDetailNewsDraft({ draft_id, version }) {
    const response = await fetchWithAuth(
      `${BASE_URL}/v1/draft-berita/${draft_id}?version=${version}`,
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
    const response = await fetchWithAuth(`${BASE_URL}/v1/draft-berita/${id}`, {
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

  async function validateNewsDraft({ draft_id, version, information }) {
    if (information) {
      const response = await fetchWithAuth(
        `${BASE_URL}/v1/draft-berita/validation-with-data/${draft_id}?version=${version}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            information,
          }),
        }
      );

      const responseJson = await response.json();

      const { error } = responseJson;

      if (error) {
        const { message } = error;
        throw new Error(message);
      }

      const { data } = responseJson;

      return data;
    }
    const response = await fetchWithAuth(
      `${BASE_URL}/v1/draft-berita/validation-automatic/${draft_id}?version=${version}`,
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

    const { data } = responseJson;

    return data;
  }

  async function getAllActivities({ page = "1", limit = "10" } = {}) {
    const response = await fetchWithAuth(
      `${BASE_URL}/v1/activity-logs?page=${page}&limit=${limit}`,
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

  async function getCommentList({ page = "1", limit = "5", id } = {}) {
    const response = await fetchWithAuth(
      `${BASE_URL}/v1/comments/${id}?page=${page}&limit=${limit}`,
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

  async function postComment({ id_redaktur, content, id }) {
    const body = {
      content,
      id_redaktur,
    };
    const response = await fetchWithAuth(`${BASE_URL}/v1/comments/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const responseJson = await response.json();

    const { error } = responseJson;

    if (error) {
      const { message } = error;
      throw new Error(message);
    }

    return responseJson;
  }

  async function getNewsDraftCount() {
    const response = await fetchWithAuth(
      `${BASE_URL}/v1/draft-berita/count-by-status`,
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

  return {
    putAccessToken,
    getAccessToken,
    login,
    getOwnProfile,
    getAllNewsDraft,
    getDetailNewsDraft,
    updateNewsDraft,
    validateNewsDraft,
    getAllActivities,
    getCommentList,
    postComment,
    getNewsDraftCount,
  };
})();

export default api;
