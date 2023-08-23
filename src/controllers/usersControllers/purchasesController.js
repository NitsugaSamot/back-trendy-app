const{ User} = require('../../db')

const savePurchases = async (req, res) => {
    const userId = req.params.id

    const {id, name, price, quantity, description, rating } = req.body;
    try {
        const user = await User.findByPk(userId)

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
          }

          console.log(id, name, price, quantity, description);


        await user.addBuy(id, name, price, quantity, description, rating)
        res.status(201).json({message: "compra almacenada"})
    } catch (error) {
        console.log(error);
        res.status(400).json({massage: error})
    }

}

module.exports = {
    savePurchases
}