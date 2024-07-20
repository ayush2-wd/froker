const API_BASE_URL = 'http://localhost:5000/api';

export const fetchBlog = async () => {
  const response = await fetch(`${API_BASE_URL}/blogs`);
  const data = await response.json();
  return data;
};
