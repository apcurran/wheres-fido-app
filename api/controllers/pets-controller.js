import { getToken } from "../helpers/token-cache.js";

/**
 * @typedef {import("express").RequestHandler} RequestHandler
 */

/** @type {RequestHandler} */
async function getPets(req, res, next) {
    try {
        const accessToken = await getToken();
        res.end();
    } catch (err) {
        next(err);
    }
}

export default { getPets };
