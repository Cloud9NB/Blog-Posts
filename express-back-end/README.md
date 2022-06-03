# Backend Assessment

### Summary

```
The use of this server is using two routes combined into one starting at '/api/posts'.
Users can can input multiple tags such as '/api/posts/history,tech/'.

The next two route parameters are optional.
The first is sortBy, which allows users to sort by any of the keys inside 'posts' ex. '/id' or '/likes' etc.
The second is the order of the sorting, either descending or ascending by writing '/desc' or '/asc'.
An example of the full route for example would be '/api/posts/tech,history/id/asc'.
This will return a list  of posts containing the tags with 'tech' and 'history' together by the order of 'id' in the ascending order.
```

### Dependencies

```
"axios": "^0.27.2",
"express": "^4.18.1",
"request": "^2.88.2"
```

### Dev Dependencies

```
"chai": "^4.3.6",
"mocha": "^10.0.0"
```

### Usage

```
1 - Once in the the Blog-Posts directory, 'cd express-back-end' THEN run 'npm i' to install all dependencies
2 - Run 'npm start' to start the server
3 - To test the server's ping go to 'http://localhost:8001/api/ping'
4 - To test the server's tags search go to 'http://localhost:8001/api/posts/:tags/:sortBy?/:direction?'
For example - 'http://localhost:8001/api/posts/tech,history/id/asc'
5 - If you wish the to run the test run 'npm test'
```
