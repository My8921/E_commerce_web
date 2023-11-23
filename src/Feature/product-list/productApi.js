export function fetchAllProducts() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('http://localhost:3000/products');
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






export function fetchProductsByFilters(filter) {



//filter ={"category":"smartphone"}   =>filter is a key value pair 

let queryString='';
for(let key in filter){
  queryString+=`${key}=${filter[key]}&`;
}

  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('http://localhost:3000/products?'+queryString);
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