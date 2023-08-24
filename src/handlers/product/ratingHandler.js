const { ratingController } = require ("../../controllers/productsControllers/ratingController")

const ratingHandler = async ( req, res ) => {
    const {newRating, id } = req.body;

    try {
        const ratingSuccessfully = await ratingController(id, newRating)

        if(!ratingSuccessfully){
            return res.status(400).json({ message: "NO EXISTE PRODUCTO"}) 
        }

       
        return res.status(200).json({ ratingSuccessfully})
       
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

module.exports = ratingHandler 