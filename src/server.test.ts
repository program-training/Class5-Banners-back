// import { expect, test } from "vitest";
// import request from "supertest";
// import express from "express";
// import { UserInterface } from "./users/interface/userInterface";
// const app = express();

// test("GET /api/users", async () => {
//   const response = await request(app).get("/users");

//   expect(response.statusCode).toBe(200);
//   expect(response.body).toBeInstanceOf(Array);

//   const firstUser = response.body[0];
//   expect(firstUser).toHaveProperty("user_id");
//   expect(firstUser).toHaveProperty("email");
// });

// test("POST /api/users/sign-up", async () => {
//   const newUser: UserInterface = {
//     username: "John Doe",
//     email: "john@test.com",
//     isAdmin: true,
//     password: "1234",
//   };

//   const response = await request(app).post("/users").send(newUser);

//   expect(response.statusCode).toBe(201);
//   expect(response.body.username).toEqual(newUser.username);
//   expect(response.body.email).toEqual(newUser.email);
// });
