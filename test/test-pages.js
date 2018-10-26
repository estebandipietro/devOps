var expect  = require('chai').expect;
var request = require('request');
let convert = require('../conver.js');
let assert = require('assert');

//var server = require('../bin/www');

describe('test http', function () {
  it('helloworld page example', function(done) {
      request('http://localhost:3000/helloworld' , function(error, response, body) {
          expect(body).to.equal("<!DOCTYPE html><html><body>'Hello, World!'</body></html>");
          done();
      });
  });

  it('mainpage should respond without error',function(done){
    request.get('http://localhost:3000', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('newuser should respond without error',function(done){
    request.get('http://localhost:3000/newuser', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});

describe('Temperature Conversion', function() {
  describe('cToF', function() {
    it('should convert -40 celsius to -40 fahrenheit', function() {
        assert.equal(-40, convert.cToF(-40));
      });
    it('should convert 0 celsius to 32 fahrenheit', function() {
        assert.equal(32, convert.cToF(0));
      });
    it('should return undefined if no temperature is input', function(){
        assert.equal(undefined, convert.cToF(''));
      });
  });
  describe('fToC', function() {
    it('should convert -40 fahrenheit to -40 celsius', function() {
        assert.equal(-40, convert.fToC(-40));
      });
    it('should convert 32 fahrenheit to 0 celsius', function() {
        assert.equal(0, convert.fToC(32));
      });
    it('should return undefined if no temperature is input', function() {
        assert.equal(undefined, convert.fToC('a'));
      });
  });
});
