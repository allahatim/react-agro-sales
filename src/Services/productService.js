import axios from 'axios';

const API_BASE_URL = 'https://django-agro-sales-git-main-allahatims-projects.vercel.app'; 
const ProductService = {
  // Fetch the list of products
  getProducts: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/products/?format=json`);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },
};

export default ProductService;
