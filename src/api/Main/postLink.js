import api from '../api';

export const postLink = async (url) => {
  try {
    const res = await api.post('/api/analyze', {
      link: url,
    });

    if (res.statusCode === 201) {
      return res;
    }
  } catch (err) {
    throw err;
  }
};
