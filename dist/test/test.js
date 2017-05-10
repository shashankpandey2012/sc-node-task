'use strict';

/**
 * Created by Shashank on 5/10/2017.
 */

var expect = require('chai').expect();
var should = require('should');
supertest = require('supertest');
api = supertest.agent('http://localhost:3000/api');

/**
 * Unit Test
 * */
describe("SAMPLE unit test", function () {

    /**
     * Test Case:1
     * Calling Login API Without Credentials
     * */
    it('Calling localhost:3000/api/login API without Credentials', function (done) {
        api.post('/login').set('Content-Type', 'application/json').expect('Content-Type', 'application/json').end(function (err, res) {

            res.status.should.equal(403);
            res.body.status.should.equal(403);
            done();
        });
    });

    /**
     * Test Case:2
     * Calling Login API With Wrong
     * */

    it('Calling localhost:3000/api/login API With Wrong Credentials', function (done) {
        api.post('/login').set('Content-Type', 'application/json').send({ "user_id": "admin", "password": "123" }).expect('Content-Type', 'application/json').end(function (err, res) {

            res.status.should.equal(403);
            res.body.status.should.equal(403);
            done();
        });
    });

    /**
     * Test Case:3
     * Calling Login API with correct Credentials
     * */
    it('Calling localhost:3000/api/login API With Correct Credentials', function (done) {
        api.post('/login').set('Content-Type', 'application/json').send({ "user_id": "admin", "password": "password" }).expect('Content-Type', 'application/json').end(function (err, res) {

            res.status.should.equal(200);
            res.body.status.should.equal(200);
            done();
        });
    });

    /**
     * Test Case:4
     * Calling JSON Patch API With Invalid Patch Object
     * */
    it('Calling localhost:3000/api/v1/apply_json_patch API With Invalid Patch', function (done) {
        api.patch('/v1/apply_json_patch').set('Content-Type', 'application/json').set('Authorization', 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE0OTQwMDE5NzMsImV4cCI6MTQ5OTE4NTk3MywiaXNzIjoic29jaWFsY29wcyIsInN1YiI6ImFkbWluIn0._dVDBSQL-PWrB5wtTBbgB92OmxTWY8yhw6akPuQb7dnJYYYD6fshYDkpIA_4XyCnC0f-IQeJgVqk8R0ebddeLw').send({
            "json": {
                "user": {
                    "firstName": "Albert"
                }
            },

            "patch": {
                "op": "random",
                "path": "/user/firstName",
                "value": "Einst"
            }
        }).expect('Content-Type', 'application/json').end(function (err, res) {

            res.status.should.equal(400);
            res.body.status.should.equal(400);
            done();
        });
    });

    /**
     * Test Case:5
     * Calling JSON Patch API With Correct Data*/
    it('Calling localhost:3000/api/v1/apply_json_patch API With Correct Data', function (done) {
        api.patch('/v1/apply_json_patch').set('Content-Type', 'application/json').set('Authorization', 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE0OTQwMDE5NzMsImV4cCI6MTQ5OTE4NTk3MywiaXNzIjoic29jaWFsY29wcyIsInN1YiI6ImFkbWluIn0._dVDBSQL-PWrB5wtTBbgB92OmxTWY8yhw6akPuQb7dnJYYYD6fshYDkpIA_4XyCnC0f-IQeJgVqk8R0ebddeLw').send({
            "json": {
                "user": {
                    "firstName": "Albert"
                }
            },

            "patch": {
                "op": "replace",
                "path": "/user/firstName",
                "value": "Einst"
            }
        }).expect('Content-Type', 'application/json').end(function (err, res) {

            res.status.should.equal(200);
            res.body.status.should.equal(200);
            done();
        });
    });

    /**
     * Test Case:6
     * Calling Thumbnail API*/
    it('Calling localhost:3000/api/v1/create_thumbnail API', function (done) {
        api.get('/v1/create_thumbnail?image_url=http://www.himachaltaxi.com/wp-content/uploads/2013/03/Shatabdi-Express-Chandigarh.jpg').set('Authorization', 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE0OTQwMDE5NzMsImV4cCI6MTQ5OTE4NTk3MywiaXNzIjoic29jaWFsY29wcyIsInN1YiI6ImFkbWluIn0._dVDBSQL-PWrB5wtTBbgB92OmxTWY8yhw6akPuQb7dnJYYYD6fshYDkpIA_4XyCnC0f-IQeJgVqk8R0ebddeLw').expect("Content-Type", 'image/jpeg').end(function (err, res) {
            res.status.should.equal(200);
            done();
        });
    });
});
//# sourceMappingURL=test.js.map