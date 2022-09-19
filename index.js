// let  requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };
  
//   fetch("http://localhost:3000/hostels", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));

const button = document.getElementById("name");
fetch("http://localhost:3000/hostels")
.then((Response) => {
  if (Response.ok){
    return Response.json()
  }else{
    throw new Error("data not fetched")
  }
})
.then((Response)=>{
  button.addEventListener("click",function(){
    Response.forEach(hostel => {
      document.getElementById("infor").innerHTML= hostel.name
      
    });
    
    console.log (Response)
  })

})
