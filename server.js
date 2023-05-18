const express = require ('express');
const override = require("method-override");

const server = express();



//router imports

const bookmarksRouter = require("./routers/bookmarks");
const categoriesRouter = require("./routers/categories");

// Body parsing middleware
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static("public"));
server.use(override("_method"));

// routers
server.use("/bookmarks", bookmarksRouter);
server.use("/categories", categoriesRouter);



server.get("/", (req, res)=> {
    res.redirect ("/bookmarks");

});



const PORT = 8000;

server.listen(PORT,()=> {
    console.log ('Server is running on port 8000')
});