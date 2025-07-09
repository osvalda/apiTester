#  apiTester

[![GitHub license](https://img.shields.io/github/license/spotify/scio.svg)](./LICENSE)

Functional API testing example. The code is written in JavaScript and uses [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/).

## Usage

### Test execution

```bash
npm test
```

### Config

Mocha config is extracted to `config/.mocharc.js` file in order to make it easier to control different execution configs (cicd, local, different environments, etc.)

Numerous configuration options are added to this file as optional flags.

### Test structure

The tests use Mocha's BDD structure to separate scenarios. Each scenario is responsible to execute one request and verify the received response.

#### Hooks and preconditions

The example includes several optional hooks, which are there purely for demonstration and aren't currently playing a significant role. You can see their potential use in 'before' and 'after' scenarios:

* authentication before any test
* sending request before test and run verifications only if the response is retreived
* clean data after run
* insert test data into DB before run

See `hooks.js` for options

#### Requests

The user is responsible for the request's structure, which can follow this template:

```js
request.execute(YOUR_BASE_ADDRESS)
    .get(YOUR_ENDPINT)
    .send(YOUR_CONTENT)
    .auth(YOUR_CREDENTIOALS_OR_TOKEN)
    .query(YOUR_PARAMS)
    .set('Content-Type', 'application/json')
    ...
```

See more details in [chai-http documentation](https://www.npmjs.com/package/chai-http)

#### Endpoint list and schema data

The endpoint list and schema data have been moved into JS modules. This allows them to be easily replaced by external dependencies. You can find the actual data in the `test-data` folder.

#### Verification steps

They were separated for improved readability and maintainability. The first step simply checks if the response returned the expected status without error content. The second phase verifies the schema, and the third is responsible for testing the response's content.

### Reporting

Build in mocha command line output and [mochawesome](https://www.npmjs.com/package/mochawesome) reports are used.

![report_example](/public/report_example.png)