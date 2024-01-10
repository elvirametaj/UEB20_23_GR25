const locations = [
    {
      image: '/images/newyorkimage.jpeg',
      tag: 'City',
      name: 'NEW YORK',
      description: 'New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park.'
    },
    {
      image: '/images/lakeimage.jpg',
      tag: 'Nature',
      name: 'Lake Lucerne',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!'
    },
    {
      image: '/images/primaides.jpeg',
      tag: 'Wonders',
      name: 'Egyptian pyramids',
      description: 'The Giza pyramid complex in Egypt is home to the Great Pyramid, the Pyramid of Khafre, and the Pyramid of Menkaure, along with their associated pyramid complexes and the Great Sphinx. All were built during the Fourth Dynasty of the Old Kingdom of ancient Egypt, between c. 2600 – c. 2500 BC.'
    }
  ];


  function createCard(location) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';

    const cardHeaderDiv = document.createElement('div');
    cardHeaderDiv.className = 'card__header';

    const image = document.createElement('img');
    image.src = location.image;
    image.alt = 'card__image';

    const cardBodyDiv = document.createElement('div');
    cardBodyDiv.className = 'card__body';

    const tagSpan = document.createElement('span');
    tagSpan.className = `tag tag-${location.tag.toLowerCase()}`;
    tagSpan.textContent = location.tag;

    const nameHeading = document.createElement('h4');
    nameHeading.textContent = location.name;

    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.textContent = location.description;

    cardHeaderDiv.appendChild(image);
    cardBodyDiv.appendChild(tagSpan);
    cardBodyDiv.appendChild(nameHeading);
    cardBodyDiv.appendChild(descriptionParagraph);

    cardDiv.appendChild(cardHeaderDiv);
    cardDiv.appendChild(cardBodyDiv);

    return cardDiv;
  }

  const locationContainer = document.getElementById('locationContainer');
  locations.forEach(location => {
    const card = createCard(location);
    locationContainer.appendChild(card);
  });