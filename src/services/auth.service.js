import axios from 'axios';

const fetchUser = async () => {
  try {
    const { data } = await axios.get('http://localhost:8080/api/current_user', {
      withCredentials: true,
    });
    // false means user hasn't logged in
    return data.user || false;
  } catch (e) {
    throw new Error(e);
  }
};

export const authService = { fetchUser };
