import express from "express";
import request from "supertest";

import { describe, it } from "node:test";
import assert from "node:assert/strict";

import petsRouter from "./pets-router.js";

const app = express();
app.use(express.json());
app.use("/api/pets", petsRouter);

describe("GET pets", () => {
    it("responds with pets data", async () => {
        const result = await request(app).get("/api/pets").query({
            page: 1,
        });
        assert.strictEqual(result.status, 200);
        assert.ok(result.body.animals);
    });
});

describe("GET one pet", () => {
    it("responds with specific pet data by id", async () => {
        const petId = 77768279;
        const result = await request(app).get(`/api/pets/${petId}`);
        assert.strictEqual(result.status, 200);
        assert.ok(result.body.animal);
    });
});
