import { Router } from "express";
import {getEmployeees, createEmployees, updateEmployees, deleteEmployees, getEmployeee, getRRHH, getRRHHs, createRRHH, updateRRHH, deleteRRHH} from '../controllers/employees.controller.js'

const router = Router()

router.get('/employees', getEmployeees)
//Buscar por id
router.get('/employees/:id', getEmployeee)

router.post('/employees', createEmployees)

router.put('/employees/:id', updateEmployees)

router.delete('/employees/:id', deleteEmployees)

//requerimiento clase
router.get('/rrhh', getRRHHs)
router.get('/rrhh/:id', getRRHH)
router.post('/rrhh', createRRHH)
router.put('/rrhh/:id', updateRRHH)
router.delete('/rrhh/:id', deleteRRHH)
//Fin

export default router