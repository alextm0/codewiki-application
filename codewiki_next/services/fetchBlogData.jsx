import axios from 'axios';

const API_BLOGS = process.env.NEXT_PUBLIC_API_BLOGS;

export const getPosts = async () => {
  try {
    const response = await axios.get(`${API_BLOGS}?populate=*`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const getPostById = async (id) => {
  try {
    const response = await axios.get(`${API_BLOGS}/${id}?populate=*`);
    return response.data;
  } catch (error) {
    console.error('Error fetching post:', error);
    throw error;
  }
}

export const getPostByBadgeAndSlug = async (badge, slug) => {
  try {
    // Fetch the data from the API, filtering by slug directly in the URL
    const response = await axios.get(`${API_BLOGS}?filters[badge][$eq]=${badge}&filters[slug][$eq]=${slug}&populate=*`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data from API:', error);
    throw error;
  }
};

// ----------------------------------------------------------------

const API_CATEGORIES = process.env.NEXT_PUBLIC_API_CATEGORIES;

export const getCategories = async () => {
  try {
    const response = await axios.get(API_CATEGORIES);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const getCategoryById = async (id) => {
  try {
    const response = await axios.get(`${API_CATEGORIES}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching category:', error);
    throw error;
  }
}