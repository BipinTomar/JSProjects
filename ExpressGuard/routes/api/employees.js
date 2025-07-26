const express = require('express');
const router = express.Router();
const employeesController = require('../../controller/employeesController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .get(employeesController.getAllEmployees)
    .post(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor, ROLES_LIST.User), employeesController.createNewEmployee)
    .put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), employeesController.updateEmployee)
    .delete(verifyRoles(ROLES_LIST.Admin), employeesController.deleteEmployee);
    //rvk5PrcEBA5GDGdW
    //bkumarbe16
    //mongodb+srv://bkumarbe16:<db_password>@cluster0.swp3smu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
router.route('/:id')
    .get(employeesController.getEmployee);

module.exports = router;