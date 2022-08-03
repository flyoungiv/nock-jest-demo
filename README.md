# nock-jest-demo
## Usage
 - `git clone https://github.com/flyoungiv/nock-jest-demo.git`
 - `npm install`
 - `npm run test`

## Observations
The file `app/unfinishedService.js` contains a dummy API call that simulates work that isn't finished or that you don't have all the details for.

When running unit tests, we would expect that our unit test in `app/serviceController.test.js` should fail, because the API call is to a fake endpoint: https://broken-api-does-not-work.com/get?foo1=bar1&foo2=bar2

Notice that when running our unit tests with `npm run test`  we never actually hit the fake endpoint. Instead, `nock` intercepts the request and returns whatever data we specify.  This block in particular does the magic.
