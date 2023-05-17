const Sequelize = require('sequelize');
const { STRING, INTEGER } = Sequelize;

const db = new Sequelize(`postgres://localhost:5432/bookmarker`);

//making bookmark table
const Bookmark = db.define("bookmark",{
    name:{
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
          },
    },
    url:{
        type:STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
          },
    }
  }
)
const Category = db.define("category",{
    name: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
          },
    }
})

Category.hasMany(Bookmark);
Bookmark.belongsTo(Category)

module.exports = {
    db,
    Bookmark,
    Category,
}