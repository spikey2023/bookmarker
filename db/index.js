const Sequelize = require ('sequelize');
const { STRING } =  Sequelize;
const db = new Sequelize("postgress://localhost:5432/bookmarker");

//making bookmark table
const Bookmark = db.define("bookmark",{
    name:{
        type: STRING,
        allowNull: false,
    },
    url:{
        type:STRING,
        allowNull: false,
    }
    }
)
const Category = db.define("category",{
    
})


module.exports = {
    db,
    bookmark,
};