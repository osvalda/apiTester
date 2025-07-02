import * as chai from "chai";
import ajv from "chai-json-schema-ajv";

import {default as chaiHttp, request} from "chai-http";

chai.use(chaiHttp);
chai.use(ajv);

const { expect } = chai;

describe('Preconditon', () => {
    beforeEach(() => {
        console.log("Before method");
    });

describe('/GET iss-now', () => {
      it('it should GET the iss current location', (done) => {
        request.execute('http://api.open-notify.org')
            .get('/iss-now.json')
            .set('Content-Type', 'application/json')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body).to.be.an("object");
                expect(res.body).to.be.jsonSchema(issSchema, 'The received json content has wrong Schema!');
                expect(res.body).not.to.have.property("error");
                expect(res.body).to.have.property("timestamp");
                expect(res.body).to.have.property("iss_position");
                expect(res.body).to.have.property("message");
                expect(res.body.message).to.include("success", "The response message is wrong!");
                done();
            });
      });
  });

});

const issSchema = {
    title: 'iss location schema v1.0',

    type: 'object',
    required: ['timestamp', 'iss_position', 'message'],
    properties: {
        timestamp: {
            type: 'number',
            minimum: 100000
        },
        iss_position: {
            type: 'object',
            required: ['latitude', 'longitude'],
            properties: {
                latitude: {
                    type: 'string',
                    minLength: 3
                },
                longitude: {
                    type: 'string',
                    minLength: 3
                }
            }
        },
        message: {
            type: 'string',
            minLength: 3
        }
    }

}