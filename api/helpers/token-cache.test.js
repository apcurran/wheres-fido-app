import assert from "node:assert/strict";
import { beforeEach, describe, it } from "node:test";

import { MockAgent, setGlobalDispatcher } from "undici";

import { getToken } from "./token-cache";

describe("getToken", { concurrency: true }, () => {
    let myAgent;
    let myMockPool;

    beforeEach(() => {
        // setup temp .env vars
        process.env.PETFINDER_API_KEY = "pet_fake_key";
        process.env.PETFINDER_API_SECRET = "pet_fake_secret";
        process.env.PETFINDER_BASE_URL = "https://api.petfinder.com/v2";

        // new mock agent for each test
        myAgent = new MockAgent();
        myAgent.disableNetConnect();
        setGlobalDispatcher(myAgent);
        myMockPool = myAgent.get(process.env.PETFINDER_BASE_URL);
    });
});
