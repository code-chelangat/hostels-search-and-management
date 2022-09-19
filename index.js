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

  const btn = document.getElementById("Callus");
fetch("http://localhost:3000/hostels/2")
  .then((Response) => {
    if (Response.ok) {
      return Response.json();
    } else {
      throw new Error("data not fetched");
    }
  })
  .then((Response) => {
    btn.addEventListener("click", function () {
     
      console.log(Response);
      const name = document.getElementById("hostel-name");
      const location = document.getElementById("hostel-location");
      name.innerHTML = Response.name;
      location.innerHTML = Response.location;
    });
  });
  const rss = document.getElementById("siri");
fetch("http://localhost:3000/hostels/3")
  .then((Response) => {
    if (Response.ok) {
      return Response.json();
    } else {
      throw new Error("data not fetched");
    }
  })
  .then((Response) => {
    rss.addEventListener("click", function () {
     
      console.log(Response);
      const name = document.getElementById("hostel-name");
      const location = document.getElementById("hostel-location");
      name.innerHTML = Response.name;
      location.innerHTML = Response.location;
    });
  });
  const hza = document.getElementById("hunza");
fetch("http://localhost:3000/hostels/4")
  .then((Response) => {
    if (Response.ok) {
      return Response.json();
    } else {
      throw new Error("data not fetched");
    }
  })
  .then((Response) => {
    hza.addEventListener("click", function () {
     
      console.log(Response);
      const name = document.getElementById("hostel-name");
      const location = document.getElementById("hostel-location");
      name.innerHTML = Response.name;
      location.innerHTML = Response.location;
    });
  });
  const gns = document.getElementById("Ginas");
  fetch("http://localhost:3000/hostels/5")
    .then((Response) => {
      if (Response.ok) {
        return Response.json();
      } else {
        throw new Error("data not fetched");
      }
    })
    .then((Response) => {
      gns.addEventListener("click", function () {
       
        console.log(Response);
        const name = document.getElementById("hostel-name");
        const location = document.getElementById("hostel-location");
        name.innerHTML = Response.name;
        location.innerHTML = Response.location;
      });
    });
    const nza = document.getElementById("nzana");
fetch("http://localhost:3000/hostels/6")
  .then((Response) => {
    if (Response.ok) {
      return Response.json();
    } else {
      throw new Error("data not fetched");
    }
  })
  .then((Response) => {
    nza.addEventListener("click", function () {
     
      console.log(Response);
      const name = document.getElementById("hostel-name");
      const location = document.getElementById("hostel-location");
      name.innerHTML = Response.name;
      location.innerHTML = Response.location;
    });
  });