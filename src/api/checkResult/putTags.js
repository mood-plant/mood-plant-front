import api from '../api';

export const putTags = async (data) => {
  // console.log(data);
  try {
    const res = await api.put('/api/analyze', {
      data,
    });

    if (res.statusCode === 201) {
      return res.headers['Location'];
    }
  } catch (err) {
    throw err;
  }
};
