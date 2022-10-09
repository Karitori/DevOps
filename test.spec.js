const axios = require("axios");

beforeEach(() => {
	jest.clearAllMocks();
	jest.resetAllMocks();
	jest.setTimeout(10000);
});

describe("Test API", () => {
	beforeEach(() => {
		jest.clearAllMocks();
		jest.resetAllMocks();
		jest.setTimeout(10000);
	});
	test("Test Endpoint", async () => {
		jest.setTimeout(10000);
		var final = "";
		const results = await axios
			.get("http://192.168.2.244:3000/init")
			.then(function (response) {
				console.log(response);
				final = response.data;
			})
			.catch(function (error) {
				console.log(error);
			});
		expect(final).toEqual("Working Perfectly Fine ^_^");
	});
});
