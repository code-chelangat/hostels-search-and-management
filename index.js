// let  requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };

//   fetch("http://localhost:3000/hostels", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));

const button = document.getElementById("Marku");
fetch("https://node-hostel-combine-suh.herokuapp.com/api/v1/hostels/5d725a1b7b292f5f8ceff788")  
  .then((Response) => {
    if (Response.ok) {
      return Response.json();
    } else {
      throw new Error("data not fetched");
    }
  })
  .then((Response) => {
    button.addEventListener("click", function () {
     
      console.log(Response.data.name);
      const name = document.getElementById("hostel-name");
      const location = document.getElementById("hostel-location");
      name.innerHTML = Response.data.name;
      location.innerHTML = Response.data.location.street;
    });
  });

  const btn = document.getElementById("Callus");
fetch("https://node-hostel-combine-suh.herokuapp.com/api/v1/hostels/5d725a037b292f5f8ceff787")
  .then((Response) => {
    if (Response.ok) {
      return Response.json();
    } else {
      throw new Error("data not fetched");
    }
  })
  .then((Response) => {
    btn.addEventListener("click", function () {
     
      console.log(Response.data.name);
      const name = document.getElementById("hostel-name");
      const location = document.getElementById("hostel-location");
      name.innerHTML = Response.data.name;
      location.innerHTML = Response.data.location.street;
    });
  });
  const rss = document.getElementById("siri");
fetch("https://node-hostel-combine-suh.herokuapp.com/api/v1/hostels/5d713a66ec8f2b88b8f830b8")
  .then((Response) => {
    if (Response.ok) {
      return Response.json();
    } else {
      throw new Error("data not fetched");
    }
  })
  .then((Response) => {
    rss.addEventListener("click", function () {
     
      console.log(Response.data.name);
      const name = document.getElementById("hostel-name");
      const location = document.getElementById("hostel-location");
      name.innerHTML = Response.data.name;
      location.innerHTML = Response.data.location.street;
    });
  });
  const hza = document.getElementById("hunza");
fetch("https://node-hostel-combine-suh.herokuapp.com/api/v1/hostels/5d713995b721c3bb38c1f5d0")
  .then((Response) => {
    if (Response.ok) {
      return Response.json();
    } else {
      throw new Error("data not fetched");
    }
  })
  .then((Response) => {
    hza.addEventListener("click", function () {
     
      console.log(Response.data.name);
      const name = document.getElementById("hostel-name");
      const location = document.getElementById("hostel-location");
      name.innerHTML = Response.data.name;
      location.innerHTML = Response.data.location.street;
    });
  });

  