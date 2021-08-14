const express = require("express");
const v1Student = require('./v1/student');

module.exports = (app, route) => {

    v1Student(route);
    app.use('/api/v1', route);

}
