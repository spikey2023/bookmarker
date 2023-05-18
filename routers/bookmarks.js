const bookmarksRouter = require("express").Router();

//models (brings in the tables/sequelized database)
const {Bookmark, Category} = require("../db/index")

//HTML pages
const bookmarkHTML =  require("../views/bookmarkHTML")

bookmarksRouter.get("/", async (req, res, next) => {
    try {
        const categories = await Category.findAll();
        const bookmarks = await Bookmark.findAll({
            attributes: ["id","name","url"],

            include :[{
                model: Category,
                attributes: ["id", "name"],
            }]

        });
        
        res.send(bookmarkHTML(bookmarks, categories));
    } catch (error) {
        console.log("Error in Get /bookmarks");
        next(error);
        
    }

});

module.exports = bookmarksRouter;

