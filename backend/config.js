const database = {
    user: 'root',
    password: '',
    schema: 'descomplica',
    host: 'localhost:3306',
    get url() {
        return `mysql://${this.user}:${this.password}@${this.host}/${this.schema}`;
    }
};

module.exports = { database }