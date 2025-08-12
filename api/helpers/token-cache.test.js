import assert from "node:assert/strict";
import { beforeEach, describe, it } from "node:test";

import { MockAgent, setGlobalDispatcher } from "undici";

import { getToken, clearTokenCache } from "./token-cache.js";

describe("getToken", { concurrency: true }, () => {
    let myAgent;
    /** @type {import('undici').MockPool} */
    let myMockPool;

    beforeEach(() => {
        // setup temp .env vars
        process.env.PETFINDER_API_KEY = "pet_fake_key";
        process.env.PETFINDER_API_SECRET = "pet_fake_secret";
        process.env.PETFINDER_BASE_URL = "https://api.petfinder.com";

        // clear old token
        clearTokenCache();

        // new mock agent for each test
        myAgent = new MockAgent();
        myAgent.disableNetConnect();
        setGlobalDispatcher(myAgent);
        myMockPool = myAgent.get(process.env.PETFINDER_BASE_URL);
    });

    it("fetches and caches the Petfinder API token", async () => {
        const tokenName = "mocked_access_token";

        myMockPool
            .intercept({
                path: "/v2/oauth2/token",
                method: "POST",
            })
            .reply(200, {
                access_token: tokenName,
                expires_in: 3600, // 1 hr in seconds
            });

        // fetch from mock
        const token1 = await getToken();
        assert.equal(token1, tokenName);

        // should retrieve from cache
        const token2 = await getToken();
        assert.equal(token2, tokenName);
    });
});
