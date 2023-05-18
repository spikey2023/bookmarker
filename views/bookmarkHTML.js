module.exports = (bookmarks,categories) => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/style.css" />
    <title>Bookmarker</title>
</head>

<body>
<h1>Bookmarker</h1>
<div class="zooBody">
 <section class="animalForm">
    <h2>Add a Bookmark</h2>
    <form action="/bookmarks" method="POST">
     <input name="name" placeholder="Name" />
              <input name="url" placeholder="url" />
              <select name="categoryId">
                ${categories.map(
                  (category) => `
                <option value=${category.id}>${category.name}</option>
              `
                )}
              </select>
              <button>add</button>
    </form>
    </section>
<section class="animalList">
${bookmarks
  .map((bookmark) => {
    return bookmark=
` <section class="animalCard">
        <h2>${bookmark.name}</h2>
        <h3 class="species">Category: ${bookmark.category.name}</h3>
        <a href="/categories/${bookmark.category.id}"><h3>${bookmark.category.name}</h3></a>
    </section>`;
  })
  .join("")}
</section>
</div>
</body>

</html>
    `;
};
