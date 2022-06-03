const expect = require('chai').expect;
const request = require('request');

describe('Express-Back-End Test', () => {

  describe('Step 1', () => {

    it('Will return a success JSON', () => {
      request('http://localhost:8001/api/ping', (error, response, body) => {
        expect(body).to.equal('{"success":true}');
      });
    });

    it('Will return 200 status code for correct route', () => {
      request('http://localhost:8001/api/ping', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
      });
    });


    describe('Step 2', () => {

      it('Will return 200 status code for correct route', () => {
        request('http://localhost:8001/api/posts/history,tech/likes/desc', (error, response, body) => {
          console.log('RE!!', response)
         expect(response.statusCode).to.equal(200);
        });
      });

    });

  });
});