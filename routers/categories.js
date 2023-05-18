const categoriesRouter = require("express").Router();

//models (brings in the tables/sequelized database)
const {Bookmark, Category} = require("../db/index")

//HTML pages
const categoryHTML =  require("../views/categoryHTML")

categoriesRouter.get("/:id", async (req, res, next) => {
    try {
        const categories = await Category.findByPk(req.params.id);
        console.log("Testing Categories",categories);
            const bookmarks = await Bookmark.findAll({
            where: {
                categoryId: req.params.id,
            }
        });
        res.send(categoryHTML(categories, bookmarks));
        
    } catch (error) {
        console.log("Error in Get /categories");
        next(error);
        
    }

});

module.exports = categoriesRouter;

