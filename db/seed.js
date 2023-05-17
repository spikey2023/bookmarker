const {db, Bookmark, Category} = require("./index")

const seed = async () => {
  try {
    await db.sync({force: true});
    const [code, search, jobs] = await Promise.all([
      Category.create({name: "coding"}),
      Category.create({name: "search"}),
      Category.create({name: "jobs"}),
    ]);

    await Promise.all([
      Bookmark.create({
        name: "Google",
        url: "https://www.google.com/"
        categoryId: search.id,
      }),
      Bookmark.create({
        name: "Stack Overflow",
        url: "https://stackoverflow.com/"
        categoryId: code.id,
      }),
      Bookmark.create({
        name: "Bing",
        url: "https://www.bing.com/"
        categoryId: search.id,
      }),
      Bookmark.create({
        name: "LinkedIn",
        url: "https://www.linkedin.com/"
        categoryId: jobs.id,
      }),
      Bookmark.create({
        name: "Indeed",
        url: "https://www.indeed.com/"
        categoryId: jobs.id,
      }),
      Bookmark.create({
        name: "MDN",
        url: "https://developer.mozilla.org/en-US/"
        categoryId: code.id,
      }),

    ]);


    db.close();
  } catch (error) {
    console.log(error)
    db.close();
  }
}

seed();