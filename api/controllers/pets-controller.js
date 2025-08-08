import { getToken } from "../helpers/token-cache.js";

/**
 * @typedef {import("express").RequestHandler} RequestHandler
 */

/** @type {RequestHandler} */
async function getPets(req, res, next) {
    try {
        const accessToken = await getToken();
        const petfinderApiRequest = await fetch(
            `${process.env.PETFINDER_BASE_URL}/animals?&page=1`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            },
        );
        const petsData = await petfinderApiRequest.json();
        res.status(200).json(petsData);
    } catch (err) {
        next(err);
    }
}

export default { getPets };
