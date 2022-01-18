// Include Sequelize module.
const Sequelize = require('sequelize')

// Import sequelize object,
// Database connection pool managed by Sequelize.
const sequelize = require('../utils/database')

// Define method takes two arguments
// 1st - name of table
// 2nd - columns inside the table
const Review = sequelize.define('Review', {

	// Column-1, user_id is an object with
	// properties like type, keys,
	// validation of column.
	id:{

		// Sequelize module has INTEGER Data_Type.
		type:Sequelize.INTEGER,

		// To increment user_id automatically.
		autoIncrement:true,

		// user_id can not be null.
		allowNull:false,

		// For uniquely identify user.
		primaryKey:true
	},

	// Column-2, name
	name: { type: Sequelize.STRING, allowNull:false },

	// Column-3, email
	email: { type: Sequelize.STRING, allowNull:false },

	// Column-4,
	comment: { type: Sequelize.STRING, allowNull:false },

    stars:{ type:Sequelize.INTEGER,allowNull:false},

    guitar_id:{
        type: Sequelize.INTEGER,
       references: {
          model: 'guitars', // 'guitars' refers to table name
          key: 'id', // 'id' refers to column name in guitars table
       }
      },

	// Timestamps
	createdAt: Sequelize.DATE,
	updatedAt: Sequelize.DATE,
})


module.exports = Review
