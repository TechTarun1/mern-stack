import express, { Router } from 'express'

const { AddUSer } = require('../controllers/UserConroller')
const { LoginUser } = require('../controllers/LoginUserContoller')
const { UpdateUser } = require('../controllers/UserUpdateController')
const { GetUSers } = require('../controllers/GetUsersController')
const { Profile } = require('../controllers/ProfileController')

const router: Router = express.Router();

router.post("/register", AddUSer);

router.post("/login", LoginUser);

router.put("/edit", UpdateUser)

router.get("/users", GetUSers)

router.get("/profile", Profile)

module.exports = router;
