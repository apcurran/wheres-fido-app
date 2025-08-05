import express from "express";

const app = express();

app.disable("x-powered-by");
app.use(express.json());

if (process.env.DEV_DEBUG === "true") {
    const morgan = await import("morgan");
    app.use(morgan.default("dev"));
}

app.listen(process.env.PORT, () => {
    console.log(
        `Server running on port ${process.env.PORT}, debug mode is ${process.env.DEV_DEBUG ? "on" : "off"}.`,
    );
});
