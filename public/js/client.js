fetch('http://localhost:8080/api/gallery')
  .then(function(response){
    // JSON `data` returned from server
    // We need to convert it in a Javascript object
    return response.json();
  })
  .then(function(animals){
    // `data`Javavascript object 
    console.log(animals);

    let outputHTML = '';

    animals.forEach(function(animal){
      outputHTML += `
        <a href="/gallery/${animal}">
          <img src="https://picsum.photos/id/${animal}/250" alt="One of Puppy's Frens: ${animal}">
        </a>
      `;
    })

    // output to DOM
    document.querySelector('.gallery').innerHTML = outputHTML;

  })
  .catch(function(error){
    if (error) {
      console.log('Oh Noooooooos!');
    }
  });