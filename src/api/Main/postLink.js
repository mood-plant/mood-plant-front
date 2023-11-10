import api from '../api';

export const postLink = (url) => {
  try {
    const res = api.post('/api/analyze', {
      link: url,
    });

    if (res.statusCode === 201) {
      return res;
    }
  } catch (err) {
    throw err;
  }
};
