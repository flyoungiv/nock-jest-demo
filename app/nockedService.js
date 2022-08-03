const nock = require('nock')

const scope = nock('https://weather.com/')
  .get('/search')
  .reply(200, {
    temp: '56',
		scale: 'F',
		zip: '78660'
  })