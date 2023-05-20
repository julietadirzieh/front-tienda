export const baseUrl = "http://localhost:3000/api/";

export const authorizeRequest = () => ({
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
