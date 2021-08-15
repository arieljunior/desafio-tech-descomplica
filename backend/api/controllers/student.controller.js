const studentModel = require('../models/student.model')

const getStudents = async (req, res, next) => {
    const students = await studentModel.selectStudents()
    res.json(students)
}

module.exports = {
    getStudents
}