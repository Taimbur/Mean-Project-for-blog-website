const express = require('express')
const router = express.Router()

const Employee = require('../models/employee.model')
const { generateCrudMethods } = require('../services')
const employeeCrud = generateCrudMethods(Employee)
const { validateDbId, raiseRecord404Error } = require('../middlewares');


router.get('/', (req, res, next) => {
    employeeCrud.getAll()
        .then(data => res.send(data))
        .catch(err => next(err))
})

router.get('/:id', validateDbId, (req, res, next) => {
    employeeCrud.getById(req.params.id)
        .then(data => {
            if (data) res.send(data)
            else raiseRecord404Error(req, res)
        })
        .catch(err => next(err))
})

router.post('/', (req, res, next) => {
    console.warn(req.body)
    const newRecord = {
        FullName: req.body.FullName,
        Position: req.body.Position,
        Location: req.body.Location,
        Salary: req.body.Salary,
        Email: req.body.Email,
        Phone: req.body.Phone,
        Feedback: req.body.Feedback
    }
    employeeCrud.create(newRecord)
        .then(data => res.status(201).json(data))
        .catch(err => next(err))
})

router.put('/:id', validateDbId, (req, res) => {
    const udpatedRecord = {
        FullName: req.body.FullName,
        Position: req.body.Position,
        Location: req.body.Location,
        Salary: req.body.Salary,
        Email: req.body.Email,
        Phone: req.body.Phone,
        Feedback: req.body.Feedback
    }
    employeeCrud.update(req.params.id, udpatedRecord)
        .then(data => {
            if (data) res.send(data)
            else raiseRecord404Error(req, res)
        })
        .catch(err => next(err))
})

router.delete('/:id', validateDbId, (req, res) => {
    employeeCrud.delete(req.params.id)
        .then(data => {
            if (data) res.send(data)
            else raiseRecord404Error(req, res)
        })
        .catch(err => next(err))
})


module.exports = router