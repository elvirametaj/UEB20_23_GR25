const locations = [
    {
      image: '/images/bali.jpeg',
      tag: 'Nature',
      name: 'Bali Indonesia',
      description: 'New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park.'
      ,price:550
    },
    {
      image: '/images/sydney.webp',
      tag: 'City',
      name: 'Sydney',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!'
      ,price:850
    },
    {
      image: '/images/Tokyo.jpg',
      tag: 'City',
      name: 'Tokyo',
      description: 'The Giza pyramid complex in Egypt is home to the Great Pyramid, the Pyramid of Khafre, and the Pyramid of Menkaure, along with their associated pyramid complexes and the Great Sphinx. All were built during the Fourth Dynasty of the Old Kingdom of ancient Egypt, between c. 2600 – c. 2500 BC.'
      ,price:650
    },
    
  ];


  function createCard(location) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';

    const cardHeaderDiv = document.createElement('div');
    cardHeaderDiv.className = 'card__header';

    const image = document.createElement('img');
    image.src = location.image;
    image.alt = 'card__image';
    image.width = 600; 
    image.height = 200; 

    const cardBodyDiv = document.createElement('div');
    cardBodyDiv.className = 'card__body';

    const cardFooter = document.createElement('div');
    cardFooter.className = 'card__footer';

    const tagSpan = document.createElement('span');
    tagSpan.className = `tag tag-${location.tag.toLowerCase()}`;
    tagSpan.textContent = location.tag;

    const nameHeading = document.createElement('h4');
    nameHeading.textContent = location.name;

    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.textContent = location.description;

    const price = document.createElement('h2');
    price.textContent = location.price + '$';

    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.textContent = 'View More';

    cardHeaderDiv.appendChild(image);
    cardBodyDiv.appendChild(tagSpan);
    cardBodyDiv.appendChild(nameHeading);
    cardBodyDiv.appendChild(descriptionParagraph);
    cardFooter.appendChild(price);
    cardFooter.appendChild(button);

    cardDiv.appendChild(cardHeaderDiv);
    cardDiv.appendChild(cardBodyDiv);
    cardDiv.appendChild(cardFooter);

    button.addEventListener('click', function() {
      openModal(location.name, location.description, location.price);
    });

    return cardDiv;
  }

  document.addEventListener('DOMContentLoaded', function() {
    const locationContainer = document.getElementById('locationContainer');

    if (locationContainer) {
      locations.forEach(location => {
        const card = createCard(location);
        locationContainer.appendChild(card);
      });
    } else {
      console.error('Element with id "locationContainer" not found.');
    }
  });


  function openModal(title, description, price , image) {
    const modal = document.getElementById('myModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalPrice = document.getElementById('modalPrice');
    const modalImage = document.getElementById('modalImage');

    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalPrice.textContent = 'Price: ' + price + '$';
    modalImage.src = image;
    modal.style.display = 'block';
  }

  function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }
