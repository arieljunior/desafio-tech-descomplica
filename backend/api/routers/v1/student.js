const studentController = require("../../controllers/student.controller");

module.exports = (route) => {

    route.route('/getStudents')
        .get(
            studentController.getStudents
        );
        
}
