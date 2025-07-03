import * as chai from "chai";
import ajv from "chai-json-schema-ajv";
import { environment } from "../config/environment.mjs";
import { issSchema } from "../models/issLocation/locationModels.mjs";
import { default as chaiHttp, request } from "chai-http";

chai.use(chaiHttp);
chai.use(ajv);

const { expect } = chai;

describe('Preconditon', () => {
    beforeEach(() => {
        console.log("Before method");
    });

    describe('/GET iss-now', () => {
        let response;
        it('GET the iss current location', (done) => {
            request.execute(environment.address)
                .get('/iss-now.json')
                .set('Content-Type', 'application/json')
                .end((err, res) => {
                    response = res;
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    done();
                });
        });

        it('Assert GET iss location response\'s schema', (done) => {
            expect(response).to.be.json;
            expect(response.body).to.be.an("object");
            expect(response.body).to.be.jsonSchema(issSchema, 'The received json content has wrong Schema!');
            expect(response.body).not.to.have.property("error");
            done();
        });

        it('Assert GET iss location response\'s content', (done) => {
            expect(response.body.message).to.include("success", "The response message is wrong!");
            done();
        });
    });

});