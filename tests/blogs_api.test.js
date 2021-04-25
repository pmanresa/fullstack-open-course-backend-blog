const mongoose = require("mongoose");
const supertest = require("supertest");
const helper = require("./test_helper");
const app = require("../app");
const Blog = require("../models/blog");
const api = supertest(app);

describe("blog api test", () => {
  beforeEach(async () => {
    await Blog.deleteMany({});
    await Blog.insertMany(helper.initialBlogs);
  });

  test("blog posts are returned as json", async () => {
    await api
      .get("/api/blogs")
      .expect(200)
      .expect("Content-Type", /application\/json/); // RegEx syntax
  });

  test("there are two blogs", async () => {
    const response = await api.get("/api/blogs");

    expect(response.body).toHaveLength(2);
  });

  test("the first blog is about HTTP methods", async () => {
    const response = await api.get("/api/blogs");

    expect(response.body[0].author).toBe("Pere");
  });
});

afterAll(() => {
  mongoose.connection.close();
});
