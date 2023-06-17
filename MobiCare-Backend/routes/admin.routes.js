const router = require("express").Router();
const DoctorController = require('../controller/doctor.controller')
const PatientController = require('../controller/patient.controller')
const authController = require('../controller/auth.controller')

const adminMiddleware = require('../middlewares/adminAuth.middleware')

//  Doctor Routes
router.get('/doctor/getAll',adminMiddleware,DoctorController.getAllDoctors);
// router.get('/doctor/get/:id',adminMiddleware,DoctorController.getDoctor);
router.post('/doctor/add',adminMiddleware,DoctorController.addDoctor);
router.patch('/doctor/edit/:id',adminMiddleware,DoctorController.editDoctor);

//  Patient Routes
router.get('/patient/getAll',adminMiddleware,PatientController.getAllPatients);
router.get('/patient/get/:id',adminMiddleware,PatientController.getPatient);
router.post('/patient/add',PatientController.addPatient);
router.patch('/patient/edit/:id',adminMiddleware,PatientController.editPatient);

router.post('/login',authController.AdminLogin);

module.exports = router;