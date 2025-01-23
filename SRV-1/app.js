const express = require("express");
const cors = require("cors");
const { wikisearch } = require("./wiki");
const dotenv = require("dotenv");
const dbHandler = require('./mysql/dbHandler');
const dbRouter = require("./mysql/mysql_routes");

// 2J clears screen, H moves cursor up
console.log("\x1b[2J\x1b[H");

dbHandler.createPool();

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT | 4000;

app.use("/news/api", dbRouter);

app.get("/wikisearch/api/:src", (req, res) => {
    const src = req.params.src;
    if (src == null) {
        res.status(400).end();
    }

    wikisearch(src, (e, data) => {
        if (e) {
            res.end(e);
        } else {
            res.json(data);
        }
    })


});

app.listen(PORT, (e) => {
    if (e) {
        console.log("\x1b[31mServer failed to start: " + e + "\x1b[0m");
    } else {
        console.log("\x1b[32mServer running on port " + PORT + "\x1b[0m");
    }
})