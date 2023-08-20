const {Router}=require('express')

const router = Router()

const  {users, createUser, authenticateUser, getUserByName, getAllUsers, confirmAccount, resetPassword,  testToken,  newPassword,profile, putUserDelete} = require('../controllers/usersControllers/userController')

const {checkAuth} = require('../middleware/checkAuth')



//Autenticacion , registro y confirmacion de usuarios
 
router.get('/', getAllUsers)
router.get('/name',getUserByName)

router.post('/', createUser)
router.post('/login', authenticateUser)
router.post('/confirm/:token', confirmAccount)
router.put('/', putUserDelete)


router.post('/reset-password', resetPassword)
router.route('/reset-password/:token').get(testToken).post(newPassword)

router.get('/profile', checkAuth, profile)

router.put('/', )

router.delete('/', )

module.exports = router