const express = require("express")
const interiorRouter = express.Router()
const Interior = require("../models/interior.js")

interiorRouter.get("/", (req, res, next) => {
    Interior.find((err, jobs) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(jobs)
    })
})
interiorRouter.post("/", (req, res, next) => {
    const newJob = new Interior(req.body)
    newJob.save((err, savedJob) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedJob)
    })
})
module.exports = interiorRouter
