// Include Sequelize module.
const Sequelize = require('sequelize')

// Import sequelize object,
// Database connection pool managed by Sequelize.
const sequelize = require('../utils/database')

// Define method takes two arguments
// 1st - name of table
// 2nd - columns inside the table
const Guitar = sequelize.define('Guitar', {

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

	price:{

		// Sequelize module has INTEGER Data_Type.
		type:Sequelize.INTEGER},

	// Column-2, name
	name: { type: Sequelize.STRING, allowNull:false },

	// Column-3, email
	description: { type: Sequelize.STRING, allowNull:false },

    longDescription: { type: Sequelize.STRING, allowNull:false },

	// Column-4, default values for
	// dates => current time
	revisiedDate: { type: Sequelize.DATE,
			defaultValue: Sequelize.NOW },
    //image:
    image:{
        type:Sequelize.BLOB,
    },

	// Timestamps
	createdAt: Sequelize.DATE,
	updatedAt: Sequelize.DATE,
})

// Exporting User, using this constant
// we can perform CRUD operations on
// 'user' table.
module.exports = Guitar
