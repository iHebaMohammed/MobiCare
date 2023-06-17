const router = require("express").Router()
const PatientController = require('../controller/patient.controller')
const patinetMiddleware = require('../middlewares/patientAuth.middleware')

router.post('/register', PatientController.addPatient)
router.put('/fuid/add', patinetMiddleware, PatientController.addFUID)

router.patch('/edit', patinetMiddleware, PatientController.editPatient)

router.post('/symptom/add', patinetMiddleware, PatientController.addSymptom)
router.get('/symptom/getAll', PatientController.getSymptoms)
router.delete('/symptom/delete', patinetMiddleware, PatientController.deleteSymptom)

router.get('/get/:id', PatientController.getPatient)
router.get('/getDoctors', patinetMiddleware, PatientController.getDoctors)

module.exports = router