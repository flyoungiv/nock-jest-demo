const serviceController = require("./serviceController");
const nock = require('nock')


const mockResponseData = {
	temp: '56',
	scale: 'F',
	zip: '78660'
};

test('unfinishedService should return expected sample data', async () => {

	nock('https://broken-api-does-not-work.com')
  .get('/get')
	.query(true)
  .reply(200, () => ({
    temp: '56',
		scale: 'F',
		zip: '78660'
  }))

	const a = await serviceController();
	expect(a).toEqual(mockResponseData);
}) 