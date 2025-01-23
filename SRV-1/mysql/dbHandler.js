const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

class dbHandler {
    constructor() {
        this.pool = undefined;
        this.user = process.env.DB_USER;
        this.pass = process.env.DB_PASSWORD;
        this.database = process.env.DB_DATABASE;
        this.host = process.env.DB_HOST;
        this.port = process.env.DB_PORT;
    }

    async createPool() {
        try {
            const pool = mysql.createPool({
                host: this.host,
                user: this.user,
                password: this.pass,
                database: this.database,
                port: this.port
            });
    
            
            this.pool = pool;
            return this.pool;
        } catch (e) {
            console.log(e);
            return;
        }
    }

    getPool() {
        return this.pool;
    }

    hasPool() {
        return this.pool != undefined;
    }

}



module.exports = new dbHandler();