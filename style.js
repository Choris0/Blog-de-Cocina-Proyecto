const recipeList = document.querySelector('.recipe-list');

const recipes = [
  { title: 'Carnes', description: '', image: 'https://i.imgur.com/wn2U2VJ.jpg', url:'recetas/Carnes/Carnes.html' },
  { title: 'Pastas', description: '', image: 'https://i.imgur.com/ARPLy5n.jpg', url:'recetas/Pastas/Pastas.html'},
  { title: 'Pizzas', description: '', image: 'https://i.imgur.com/fNFcOTn.jpg', url:'recetas/Pizzas/Pizzas.html' },
  { title: 'Postres', description: '', image:'https://i.imgur.com/srvCE1a.jpg', url:'recetas/Postres/Postres.html' },
];

recipes.forEach(recipe => {
  const recipeCard = document.createElement('article');
  recipeCard.classList.add('recipe-card');
  recipeCard.innerHTML = `
    <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
    <div class="recipe-info">
      <h3 class="recipe-title">${recipe.title}</h3>
      <p class="recipe-description">${recipe.description}</p>
      <a href="${recipe.url}" class="btn btn-recipe">Ver Recetas</a>
    </div>
  `;
  recipeList.appendChild(recipeCard);
  
});