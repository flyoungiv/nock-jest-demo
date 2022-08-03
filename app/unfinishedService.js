const axios = require('axios').default;

const unfinishedServiceCall = async () => {
  try {
    const response = await axios.get('https://broken-api-does-not-work.com/get?foo1=bar1&foo2=bar2');
    console.log(response);
		return response.data;
  } catch (error) {
    console.error(error);
  }
}

module.exports = unfinishedServiceCall;