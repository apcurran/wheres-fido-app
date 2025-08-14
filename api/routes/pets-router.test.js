import express from "express";
import request from "supertest";
import { MockAgent, setGlobalDispatcher, Agent } from "undici";

import { after, before, describe, it } from "node:test";
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
    /** @type {import('undici').MockAgent} */
    let agent;

    before(() => {
        agent = new MockAgent();
        setGlobalDispatcher(agent);
        agent.disableNetConnect();
    });

    it("responds with specific pet data by id", async () => {
        const petId = 77768279;
        const mockedName = "mocked_pet";
        agent
            .get(`${process.env.PETFINDER_BASE_URL}`)
            .intercept({ path: `/v2/animals/${petId}` })
            .reply(200, {
                animal: {
                    id: petId,
                    name: mockedName,
                },
            });

        const result = await request(app).get(`/api/pets/${petId}`);
        assert.strictEqual(result.status, 200);
        assert.strictEqual(result.body.animal.id, petId);
        assert.strictEqual(result.body.animal.name, mockedName);
    });

    after(() => {
        // restore default Fetch API
        setGlobalDispatcher(new Agent());
    });
});
