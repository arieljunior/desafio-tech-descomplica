const studentModel = require('../models/student.model')

const getStudents = async (req, res, next) => {

    const {search} = req.query;
    const students = await studentModel.selectStudents(search);
    res.json(students)
}

module.exports = {
    getStudents
}