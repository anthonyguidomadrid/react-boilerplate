const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchPosts = async () => {
  const response = await fetch(`${BASE_URL}/posts`);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};
