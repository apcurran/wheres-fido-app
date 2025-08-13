import { getToken } from "../helpers/token-cache.js";

/**
 * @typedef {import("express").RequestHandler} RequestHandler
 */

/** @type {RequestHandler} */
async function getPets(req, res, next) {
    try {
        const accessToken = await getToken();
        const url = new URL(`${process.env.PETFINDER_BASE_URL}/v2/animals`);
        const params = req.query;

        // append query params to URL
        for (let key in params) {
            const value = params[key];
            url.searchParams.set(key, value);
        }

        const petfinderApiRequest = await fetch(url, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        const petsData = await petfinderApiRequest.json();
        res.status(200).json(petsData);
    } catch (err) {
        next(err);
    }
}

/** @type {RequestHandler} */
async function getPet(req, res, next) {
    try {
        const accessToken = await getToken();
        const { id } = req.params;
        const petfinderApiRequest = await fetch(
            `${process.env.PETFINDER_BASE_URL}/v2/animals/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            },
        );
        const petData = await petfinderApiRequest.json();
        res.status(200).json(petData);
    } catch (err) {
        next(err);
    }
}

export default { getPets, getPet };
