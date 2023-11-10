import api from '../api';

export const putTags = (data) => {
  // console.log(data);
  try {
    const res = api.put('/api/analyze', {
      data,
    });

    if (res.statusCode === 201) {
      return res.headers['Location'];
    }
  } catch (err) {
    throw err;
  }
};
