const {Router}=require('express')

const router = Router()

const  {
    createUser, 
    authenticateUser, 
    getUserByName, 
    getAllUsers, 
    confirmAccount, 
    resetPassword,  
    testToken,  
    newPassword,
    profile,
    
} = require('../controllers/usersControllers/userController')

// const {saveMessage, interactionUsers, interactionProducts} = require('../controllers/usersControllers/interactionController')


const {savePurchases} = require('../controllers/usersControllers/purchasesController')

const {checkAuth} = require('../middleware/checkAuth')



//Autenticacion , registro y confirmacion de usuarios
 
router.get('/',getAllUsers)
router.get('/name',getUserByName)

router.post('/', createUser)
router.post('/login', authenticateUser)
router.post('/confirm/:token', confirmAccount)


router.post('/reset-password', resetPassword)
router.route('/reset-password/:token').get(testToken).post(newPassword)

router.post('/:id/purchases', savePurchases)

router.get('/profile', checkAuth, profile)





router.put('/', )

router.delete('/', )

module.exports = router


// router.get('/interactions', interactionUsers)
// router.post('/interactions', saveMessage)
// router.get('/interactions-products', interactionProducts)