const app = require("./app.js");
const request = require("supertest");


describe("total_test", () => {
	test("Test Endpoint", async () => {
		const response = await request(app).get("/init");
		expect(response.text).toBe("Working Perfectly Fine ^_^");
	});
});
