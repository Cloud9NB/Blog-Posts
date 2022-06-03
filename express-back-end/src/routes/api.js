const router = require('express').Router();
const axios = require('axios');

module.exports = () => {
  router.get('/ping', (req, res) => {
    const apiPing = {
      success: true,
    };
    res.status(200).json(apiPing);
  });
  
  router.get('/posts/:tags/:sortBy/:direction', (req, res) => {
    const { tags, sortBy, direction } = req.params;
    const tagsArray = tags.split(',');

    const route = tagsArray.map(tag => {
      return axios.get(`https://api.hatchways.io/assessment/blog/posts?tag=${tag}&sortBy=${sortBy}&direction=${direction}`);
    });
    
    Promise.all([
      ...route
    ])
    .then(all => {
      res.status(200).json(all[0].data);
    })
    .catch(error => {
      res.status(400).json(error.response.data);
      // console.log('The error is: ', error);
    });
  });

  return router;
};