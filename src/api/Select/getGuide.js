import api from "../api";

export const getGuide = async (url) => {
  try {
    const res = await api.get("/api/results/{id}", {
      link: url,
    });
    return res;
  } catch (err) {
    throw err;
  }
};
