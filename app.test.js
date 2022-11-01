const request = require("supertest")
const app = require("./app.js")

describe("total_test", () => {
	test("Test Endpoint", async () => {
		const response = await request(app).get("/init");
		expect(response.text).toBe("Working Perfectly Fine ^_^");
	});
});
