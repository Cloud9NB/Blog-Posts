const router = require('express').Router();
const axios = require('axios');

module.exports = () => {
  router.get('/ping', (req, res) => {
    const apiPing = {
      success: true,
    };
    res.status(200).json(apiPing);
  });
  
  router.get('/posts/:tags/:sortBy?/:direction?', (req, res) => {
    const { tags, sortBy, direction } = req.params;
    const tagsArray = tags.split(',');

    const tagsError = {
      error: 'Tags parameter is required!!!!',
    };
    const sortByError = {
      error: 'sortBy or direction parameter is invalid'
    };

    if (!tags) {
      return res.status(400).json(tagsError);
    }

    if (!sortBy || !direction) {
      return res.status(400).json(sortByError);
    }

    const route = tagsArray.map((tag, index) => {
      return axios.get(`https://api.hatchways.io/assessment/blog/posts?tag=${tag}&sortBy=${sortBy}&direction=${direction}`);
    });
    Promise.all([
      ...route
    ])
    .then(all => {
      const tagOne = all[0].data.posts;
      const tagTwo = all[1].data.posts;
      const combinedData = [...tagOne, ...tagTwo];
      const filteredArray = combinedData.filter((tag, index, self) => {
        return index === self.findIndex(post => {
          return post.id === tag.id;
        });
      });

      if (sortBy) {
        if (direction === 'desc') {
          filteredArray.sort((a, b) => b[sortBy] > a[sortBy] ? 1 : -1)
        } else {
          filteredArray.sort((a, b) => b[sortBy] < a[sortBy] ? 1 : -1)
        }
      }

      const newData = {
        posts: filteredArray,
      };

      res.status(200).json(newData);
      })
    .catch(error => {
      const tagsError = {
        error: 'Tags parameter is required',
      };
      res.status(400).json(tagsError)
      console.log(error);
    });
  });

  return router;
};