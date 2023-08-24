const { User } = require('../../db');

const setTrueRating = async (req, res) => {
  const { userId, idProduct } = req.body

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    const productIndex = user.purchaseOrder
    console.log(productIndex)
    const updatedProducts = productIndex.map(product => {
      if (product.id === idProduct) {
        return {
          ...product,
          rating: true
        };
      }
      return product;
    });

    user.purchaseOrder = updatedProducts
    await user.save();

    res.status(200).json({updatedProducts});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = setTrueRating;