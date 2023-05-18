module.exports = (categories, bookmarks) => {
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
  <header>
    <button ><a id="back" href="/bookmarks">Back</a></button>
    <h1>Categories </h1>
  </header>
  <h2>${categories.name}</h2>
  <section class="animalsList">
  </section>
  </body>
  </html>
  `;
};
//   ${categories
//     .map((category) => {
//       return category = 
//       `<section class="zooAnimalCard">
//           <h2>${category.name}</h2>
//           <h3 class="species"> ${bookmarks.name} - ${category.name} </h3>
//           <form class="deleteAnimal" action="/bookmarks/${bookmarks.id}?_method=DELETE" method="POST"><button>X</button></form>
//       </section>`;
//     })
//     .join("")}