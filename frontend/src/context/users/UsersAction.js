import AxiosHTTP from "../AxiosHttp";

export const signUp = async (email, password, firstname, lastname) => {
  try {
    let res = await AxiosHTTP.post("/auth/register", {
      email,
      password,
      firstname,
      lastname,
    });
    const data = await res.data;
    return data;
  } catch (err) {
    console.log(err.response);
    return err.response;
  }
};

export const signIn = async (email, password) => {
  //const params = new URLSearchParams({ email, password });
  let res = await AxiosHTTP.post("/api/v1/auth/login", {
    email,
    password,
  }); //signin or login both are valid
  const data = await res.data;
  return data;
};

export const logoutAction = () => {
  localStorage.removeItem("user");
  //window.location.reload();
};

export const saveProfile = async (first_name, last_name, token) => {
  let res = await AxiosHTTP.put(
    "/api/v1/profile",
    { firstname: first_name, lastname: last_name },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await res.data;
  return data;
};

export const getProfile = async (token) => {
  let res = await AxiosHTTP.get("/api/v1/profile", {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await res.data;
  return data;
};

export const getUser = async (token) => {
  let res = await AxiosHTTP.get("/get_user?token=" + token);
  const data = await res.data;
  return data;
};
