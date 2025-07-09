import * as chai from "chai";
import ajv from "chai-json-schema-ajv";
import { environment } from "../config/environment.mjs";
import { endpoints } from "../test-data/endpoints.mjs";
import { issSchema } from "../test-data/models/issLocation/locationModels.mjs";
import { default as chaiHttp, request } from "chai-http";

chai.use(chaiHttp);
chai.use(ajv);

const { expect } = chai;

describe('Preconditon', () => {
    beforeEach(() => {
        console.log("Before method");
    });

    describe('GET iss-now', () => {
        let response;
        let endpoint = endpoints.issModule.getIss;
        it('GET Current ISS location over Earth: ' + endpoint, (done) => {
            request.execute(environment.address)
                .get(endpoint)
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

    describe('GET astros', () => {
        let response;
        let endpoint = endpoints.astrosModule.getAstros;
        it('GET The number of people in space at this moment. List of names when known: ' + endpoint, (done) => {
            request.execute(environment.address)
                .get(endpoint)
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
            // expect(response.body).to.be.jsonSchema(astrosSchema, 'The received json content has wrong Schema!');
            expect(response.body).not.to.have.property("error");
            done();
        });

        it('Assert GET iss location response\'s content', (done) => {
            expect(response.body.message).to.include("success", "The response message is wrong!");
            done();
        });
    });

});