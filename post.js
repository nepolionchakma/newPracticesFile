function postGet(){
    let url="https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then(response=>response.json())
    .then(data=>seePost(data))
}
function seePost(posts){
    let postDivId= document.getElementById("post")
    for (const post of posts) {
        let postAll =document.createElement("div")
        postAll.innerHTML=
        `
        <div class="p-6 shadow-lg my-4 bg-green-400 hover:bg-green-300 rounded">
            <h4 class="text-center font-bold">${post.title}</h4>
            <p>${post.body}</p>
            <p>User Id :${post.userId}</p>
        
        </div>
        
        `
        postDivId.appendChild(postAll)

        console.log(post);
    }
}
postGet();