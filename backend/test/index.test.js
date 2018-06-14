import chai from 'chai';
import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import app from '../src/index';

// Turn on stack trace
chai.config.includeStack = true;

describe('Node Server', () => {
  it('should return NOT_FOUND', (done) => {
    request(app)
      .get('/')
      .expect(httpStatus.NOT_FOUND)
      .end(done);
  });
  describe('GET - system information', () => {
    it('system info should return 200', (done) => {
      request(app)
        .get('/api/v1/system')
        .expect(httpStatus.OK)
        .then(() => done())
        .catch(done);
    });
  });
});
