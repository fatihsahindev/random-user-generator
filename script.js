document.getElementById("getUser").addEventListener("click", function getUser() {

    fetch("https://randomuser.me/api")
      .then((response) => response.json())
      .then((json) => {

        // Personal
        const name = json.results[0].name.first;
        const surname = json.results[0].name.last;

        // Adress
        const number = json.results[0].location.street.number;
        const street = json.results[0].location.street.name;
        const state = json.results[0].location.state;
        const country = json.results[0].location.country;

        // Contact
        const email = json.results[0].email;
        const phone = json.results[0].phone;

        // Photo
        const image = json.results[0].picture.large;

        document.getElementById("username").innerHTML = `${name} ${surname}`;
        document.getElementById("email").innerHTML = `${email}`;
        document.getElementById("phone").innerHTML = `${phone}`;
        document.getElementById("adress").innerHTML = `${number} ${street}, ${state}, ${country}`;
        document.getElementById("image").src = image;
      });
  });
