import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

const routerLoggger = (req, res, next) => {
    console.log("PATH", req.path);
    next();
};

const methodLogger = (req, res, next) => {
    console.log("METHOD", req.method);
    next();
};

const home = (req, res, next) => {
    console.log("I will respond.");
    return res.send("hello");
};
const login = (req, res) => {
    return req.send("login");
}
app.use(logger);
app.get("/", home);
app.get("/login", login);

const handleListening = () => console.log(`Server list on port http://localhost:${PORT}`);

app.listen(PORT, handleListening)
