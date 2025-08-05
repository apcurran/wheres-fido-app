import express from "express";

import petsRouter from "./api/routes/pets-router";

const app = express();

app.disable("x-powered-by");
app.use(express.json());

if (process.env.DEV_DEBUG === "true") {
    const morgan = await import("morgan");
    app.use(morgan.default("dev"));
}

// API routers
app.use("/api/pets", petsRouter);

// custom 404
app.use((req, res) => {
    res.status(404).json({
        message: "Sorry, but this resource cannot be found.",
    });
});

// general server error handler
app.use((err, req, res, _next) => {
    console.error(err.stack || err);

    // check for nonsensical status codes by eliminating non ints
    const statusCode =
        err.status && Number.isInteger(err.status) ? err.status : 500;
    let errorDetails = {
        error: {
            message: err.message || "Server error",
            stack: "",
        },
    };

    if (process.env.DEV_DEBUG === "true") {
        errorDetails.error.stack = err.stack;
    }

    res.status(statusCode).json(errorDetails);
});

app.listen(process.env.PORT, () => {
    console.log(
        `Server running on port ${process.env.PORT}, debug mode is ${process.env.DEV_DEBUG ? "on" : "off"}.`,
    );
});
