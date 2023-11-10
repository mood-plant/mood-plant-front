import api from '../api';

export const putTags = async (data, url) => {
  // console.log(data);
  try {
    const res = await api.put(url, {
      data,
    });

    if (res.statusCode === 201) {
      return res.headers['Location'];
    }
  } catch (err) {
    throw err;
  }
};
