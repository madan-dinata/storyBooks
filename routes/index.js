const express = require('express')
const router = express.Router()

// @desk 	Login / Landing Page
// @route 	Get /
router.get('/', (req, res) => {
	res.render('login')
})

// @desk 	Dashboard
// @route 	Get /dashboard
router.get('/dashboard', (req, res) => {
	res.render('dashboard')
})

module.exports = router