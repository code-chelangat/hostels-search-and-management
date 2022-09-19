// let  requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };

//   fetch("http://localhost:3000/hostels", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));

const button = document.getElementById("Marku");
fetch("http://localhost:3000/hostels/1")
  .then((Response) => {
    if (Response.ok) {
      return Response.json();
    } else {
      throw new Error("data not fetched");
    }
  })
  .then((Response) => {
    button.addEventListener("click", function () {
     
      console.log(Response);
      const name = document.getElementById("hostel-name");
      const location = document.getElementById("hostel-location");
      name.innerHTML = Response.name;
      location.innerHTML = Response.location;
    });
  });
