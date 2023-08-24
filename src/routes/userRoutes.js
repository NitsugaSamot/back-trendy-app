const {Router}=require('express')

const router = Router()

const  {users, createUser, authenticateUser, getUserByName, getAllUsers, confirmAccount, resetPassword,  testToken,  newPassword,profile, putUserDelete, getUserById, updateProfile, updatePassword} = require('../controllers/usersControllers/userController')

const {checkAuth} = require('../middleware/checkAuth')
const setTrueRating = require('../controllers/usersControllers/setTrue')
const { savePurchases , getMyPurchases, getAllPurchases } = require('../controllers/usersControllers/purchasesController')



//Autenticacion , registro y confirmacion de usuarios
 
router.get('/', getAllUsers)

router.get('/name',getUserByName)
router.get("/:id", getUserById)

router.post('/', createUser)
router.post('/login', authenticateUser)
router.post('/confirm/:token', confirmAccount)
router.put('/', putUserDelete)
router.put('/ratingTrue', setTrueRating)


router.post('/reset-password', resetPassword)
router.route('/reset-password/:token').get(testToken).post(newPassword)
router.get('/:id/purchases', getMyPurchases);
router.post('/:id/purchases', savePurchases)

router.get('/profile', checkAuth, profile)
router.put('/profile/:id', checkAuth, updateProfile)
router.put('/update-password', checkAuth, updatePassword)
router.get('/all-purchases', getAllPurchases)
router.put('/', )

router.delete('/', )

module.exports = router
