const axios = require('axios');

const client = axios.create({
  baseURL: 'https://connpass.com/api/v1/event'
});

const events = client.get('/', {
  params: {
    keyword: 'React'
  }
})
.then(response => {
  console.log(response.data);
  // return response.data;
})
.catch(error => {
  console.log(error);
  // return error;
});