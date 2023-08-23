const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Product = sequelize.define('product', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },  
    image: {
      type: DataTypes.ARRAY(DataTypes.STRING(500)),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    productbrand: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stock: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    interactions: {
      type: DataTypes.JSON,
      defaultValue: [],
    },
    ratings: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: true,
    }
  },
  { timestamps: false });

  // Agregar el método para agregar una consulta a las interacciones del producto
  Product.prototype.addQuery = function(userId, userName, message) {
    const query = { id: userId, name: userName, message: message };
    const interacciones = [...this.interactions, query];

    return this.update({ interactions: interacciones });
  };

  return Product;
};

/* const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
    sequelize.define('product', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },  
    image: {
      type: DataTypes.ARRAY(DataTypes.STRING(500)),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    productbrand: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stock: {
      type: DataTypes.JSON,
      allowNull: false,
    }
  },
  { timestamps: false }
  );
}; */