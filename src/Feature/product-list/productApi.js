export function fetchAllProducts() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('http://localhost:8080/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }

      const data = await response.json();
      console.log('API response:', data); // Log the response
      resolve({ data });
    } catch (error) {
      console.error('Error fetching products:', error); // Log the error
      reject(error);
    }
  });
}
