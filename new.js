function users(){
    let url="https://jsonplaceholder.typicode.com/users"
    fetch(url)
    .then(r=>r.json())
    .then(d=> usersFile(d))

}
function usersFile(d){
    let usersDiv=document.getElementById("users-div");
    // let userName='';
    for(let user of d){
        console.log(user);

        let userDiv=document.createElement("div");
        userDiv.innerHTML=
        `
        <div class="p-6 my-4 bg-green-400 hover:bg-green-300 rounded">
        
        <h3>Name: ${user.name}</h3>
        <h5>Email: ${user.email}</h5>
        <span>Address :${user.address.street},${user.address.city}</span>        
        
        </div>
        `
        usersDiv.appendChild(userDiv);


        // userName=user.name;
        // email=user.email;
        // let li=document.createElement("li");
        // li.innerText=email+userName;
        // ul.appendChild(li)

        // console.log(userName)
    }
}
// users();