const db = require("./dbHandler");

exports.getAll = async (req, res) => {
    if (!db.hasPool()) {
        res.status(500).end();
        return;
    }

    const sql = 'SELECT * FROM `news`';
    const values = [];

    db.getPool().getConnection((err, conn) => {
        if (err instanceof Error) {
            res.status(404).end("no database connection!");
            return;
        }

        conn.execute(sql, values, (err, rows) => {
            if (err instanceof Error) {
                res.status(500).end();
                console.log(err);
                return;
            }
    
            res.status(200).json(rows).end();
            console.log("GET req completed from " + req.ip);
        });

        conn.release();
    })
}

exports.create = async (req, res) => {

    const { title, text } = req.body;
    if (title == undefined || text == undefined) {
        res.status(400).end("not all values given");
        console.log(title, text)
        return;
    }

    if (!db.hasPool()) {
        res.status(500).end();
        return;
    }

    const sql = 'INSERT INTO `news`(`title`, `text`) VALUES (?, ?)';
    const values = [title, text];

    db.getPool().getConnection((err, conn) => {
        if (err instanceof Error) {
            res.status(404).end("no database connection!");
            return;
        }

        conn.execute(sql, values, (err, rows) => {
            if (err instanceof Error) {
                res.status(500).end();
                console.log(err);
                return;
            }
    
            res.status(200).end();
            console.log("POST req completed from " + req.ip + " with result " + rows.affectedRows);
        });

        conn.release();
    })

}

exports.delete = async (req, res) => {

    const id = req.params;
    if (id == undefined) {
        res.status(400).end();
        return;
    }

    if (!db.hasPool()) {
        res.status(500).end();
        return;
    }

    const sql = 'DELETE FROM `news` WHERE `id` = ? LIMIT 1';
    const values = [id.id];

    db.getPool().getConnection((err, conn) => {
        if (err instanceof Error) {
            res.status(404).end("no database connection!");
            return;
        }

        conn.execute(sql, values, (err, rows) => {
            if (err instanceof Error) {
                res.status(500).end();
                console.log(err);
                return;
            }
    
            res.status(200).end();
            console.log("DELETE req completed from " + req.ip + " with result " + rows.affectedRows);
        });

        conn.release();
    })

}

exports.update = async (req, res) => {

    const { title, text } = req.body;
    const id = req.params.id;

    if (id == undefined || title == undefined || text == undefined) {
        res.status(400).end();
        return;
    }

    if (!db.hasPool()) {
        res.status(500).end();
        return;
    }

    const sql = 'UPDATE `news` SET `title` = ? , `text` = ? WHERE `id` = ?';
    const values = [title, text, id];

    db.getPool().getConnection((err, conn) => {
        if (err instanceof Error) {
            res.status(404).end("no database connection!");
            return;
        }

        conn.execute(sql, values, (err, rows) => {
            if (err instanceof Error) {
                res.status(500).end();
                console.log(err);
                return;
            }
    
            res.status(200).end();
            console.log("UPDATE req completed from " + req.ip + " with result " + rows.affectedRows);
        });

        conn.release();
    })

}