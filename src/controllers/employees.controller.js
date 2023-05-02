import {pool} from '../db.js'

export const getEmployeees = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM employee;')
        res.json(rows)
    }
    catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const getEmployeee = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM employee where id = ?', [req.params.id])

        if (rows.length <= 0 ) return res.status(404).json({
            message: 'Employee not found'
        })
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const createEmployees = async (req, res) => {
    try {
        const {name, salary} = req.body
        const [rows] = await pool.query('insert into employee (name, salary) values(?, ?)', [name, salary])
        res.send({
            id: rows.insertId,
            name, 
            salary
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const updateEmployees = async(req, res) => {
    try {
        const {name, salary} = req.body
        const [rows] = await pool.query("update employee set name = ?, salary = ? where id = ?", [name, salary, req.params.id])
        res.send({
            id: rows.insertId,
            name, 
            salary
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const deleteEmployees = async(req, res) => {
    try {
        const [result] = await pool.query('delete from employee where id = ?', [req.params.id])

        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'employee deleted'
        })

        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

//Requerimiento clase
export const getRRHHs = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM rrhh;')
    res.json(rows)
}

export const getRRHH = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM rrhh where id = ?', [req.params.id])

    if (rows.length <= 0 ) return res.status(404).json({
        message: 'Name not found'
    })
    res.json(rows[0])
}

export const createRRHH = async (req, res) => {
    const {name, cargo} = req.body
    const [rows] = await pool.query('insert into rrhh (name, cargo) values(?, ?)', [name, cargo])
    res.send({
        id: rows.insertId,
        name, 
        cargo
    })
}

export const updateRRHH = async(req, res) => {
    const {name, cargo} = req.body
    const [rows] = await pool.query("update rrhh set name = ?, cargo = ? where id = ?", [name, cargo, req.params.id])
    res.send({
        id: rows.insertId,
        name, 
        cargo
    })
}

export const deleteRRHH = async(req, res) => {
    const [result] = await pool.query('delete from rrhh where id = ?', [req.params.id])

    if (result.affectedRows <= 0) return res.status(404).json({
        message: 'Name deleted'
    })

    res.sendStatus(204)
}