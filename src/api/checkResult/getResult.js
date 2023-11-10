import api from '../api';

export const getResult = async (url) => {
  try {
    const res = await api.get(url);

    if (res.statusCode === 200) {
      const data = res.data;

      return {
        recommendThemes: data.themes,
        characters: data.voiceAndTones,
        keywords: data.spaceCondition,
      };
    }
  } catch (err) {
    throw err;
  }
};
