// import {API_URL ,STRAPI_API_TOKEN} from './urls'

// export const STRAPI_API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API


// export const API_URL = process.env.NEXT_PUBLIC_API || "https://127.0.0.1:1337";




// export const fetchDataFromApi = async (endpoint) =>{
//     const options = {
//         method: 'GET',
//         headers: {
//           Authorization: "Bearer " + STRAPI_API_TOKEN,
//         }
//       };
      
// const res = await fetch(`${API_URL}${endpoint}`,options);
// const data = await res.json();


// return data;
// }



import { API_URL, STRAPI_API_TOKEN } from './urls';

export const fetchDataFromApi = async (endpoint) => {
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch(`${API_URL}${endpoint}`, options);

    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    // You can handle the error here, throw it again, or return an error object
    throw error;
  }
};
