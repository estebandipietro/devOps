var expect  = require('chai').expect;
var request = require('request');

//var server = require('../bin/www');

it('helloworld page example', function(done) {
    request('http://localhost:3000/helloworld' , function(error, response, body) {
        expect(body).to.equal("<!DOCTYPE html><html><body>'Hello, World!'</body></html>");
        done();
    });
});

describe('pages', function(){
      it('mainpage should respond without error',function(done){
        request.get('http://localhost:3000', function(error, response, body) {
          expect(response.statusCode).to.equal(200);
          done();
        });
      });
    });
