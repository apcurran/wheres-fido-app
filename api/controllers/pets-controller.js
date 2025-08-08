/**
 * @typedef {import("express").RequestHandler} RequestHandler
 */

/** @type {RequestHandler} */
function getPets(req, res, next) {
    try {
    } catch (err) {
        next(err);
    }
}

export default { getPets };
