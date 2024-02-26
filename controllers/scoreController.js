const { Op } = require("sequelize");
const db = require('../models')

// create main Model
const Score = db.score

// main work

// 1. Get create score page

const getAddScore = async (req, res) => {
    res.render("addScore");
}

// 2. Get all scores

const getAllScores = async (req, res) => {
    let scores = await Score.findAll({});
    res.render('teacher-index', { scores: scores });
}

// 3. Get update score

const getUpdateScore = async (req, res) => {
    res.render('updateScore');
}

// 4. Post update score

const postUpdateScore = async (req, res) => {

    const roll = req.body.roll;
    const body = {
        name: req.body.name,
        dob: req.body.dob,
        score: req.body.score
    }

    await Score.update(body, { where: { roll: roll } });
    res.redirect("/teacher-index");
}

// 5. Get create score page

const postAddScore = async (req, res) => {

    let info = {
        roll: req.body.roll,
        name: req.body.name,
        dob: req.body.dob,
        score: req.body.score
    }

    const score = await Score.create(info);
    res.redirect("/teacher-index");
}

// 6. delete score by id

const deleteScore = async (req, res) => {

    await Score.destroy({ where: { roll: req.params.id } })
    res.redirect("/teacher-index");
}

// 7. get single score

const getOneScore = async (req, res) => {

    const roll = req.body.roll;
    const dob = req.body.dob;

    if (roll && dob) {
        
        let score = await Score.findOne({ where: { [Op.and]: [{ roll: roll }, { dob: dob }] } })

        if (score) {
            res.render("student-index", { score: score });
        } else {
            res.render("student-index", { message: 'Student not found!!' });
        }
    } 
    else {
        res.render("student-index", { message: 'Enter Roll number and Date of Birth!!' });
    }
}

// 8. Get create score page

const getStudentIndex = async (req, res) => {
    res.render("student-index");
}

module.exports = {
    getAllScores,
    getUpdateScore,
    postUpdateScore,
    getAddScore,
    postAddScore,
    deleteScore,
    getOneScore,
    getStudentIndex
}