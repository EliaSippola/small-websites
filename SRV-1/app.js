const express = require("express");
const cors = require("cors");
const { wikisearch } = require("./wiki");

const app = express();
app.use(cors());

const PORT = 4000;

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
    // 2J clears screen, H moves cursor up
    console.log("\x1b[2J\x1b[H");
    if (e) {
        console.log("\x1b[31mServer failed to start: " + e + "\x1b[0m");
    } else {
        console.log("\x1b[32mServer running on port " + PORT + "\x1b[0m");
    }
})