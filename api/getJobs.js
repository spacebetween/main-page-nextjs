const axios = require('axios');

let industries = [];

export const getJobs = async () => {

  await axios.get('http://localhost:3001/industries').then(response => {
    industries = response.data.data.value
  });

  return industries
} 
