window.onload=function(){
    console.log("load complete");
    getSaltCount()
    //Add eventListener for the salt button
    let saltButton = document.querySelector(".saltForm");
    saltButton.addEventListener("submit", (event) => {
        getSaltCount(true);
        event.preventDefault();
    })
    console.log("TEST")
    //add eventListener for comments
    let commentForm = document.querySelector(".comment-form")
    let commentBtn = document.getElementById("comment-button");
    let comment = document.getElementById("comment")
    commentForm.addEventListener("submit", (event) => {
        event.preventDefault();
        postComment(comment)
    })
}

let getSaltCount = (clicked=false) => {
    let url = window.location.href;
    let method = "POST";
    let headers = {
        "Content-Type":"application/json"
    }
    let body = JSON.stringify({clicked:clicked});
    fetch(url, { method:method, headers:headers, body:body }).then(
        response => response.json()
    ).then(response => {
        let saltsContainer = document.querySelector(".saltCount");
        saltsContainer.textContent = response.saltsCount;
    })
}

const postComment = (comment) => {
    let url = '';
    let method = "POST";
    let headers = {
    "Content-Type":"application/json"
    }
    let body = JSON.stringify({comment});
    fetch(url, { method:method, headers:headers, body:body }).then(
    response => response.json()
    ).then(response => {
        console.log(response)
        let commentList = document.querySelector(".comment-list");
        let li = document.createElement("li");
        li.innerText = response;
        commentList.appendChild(li)
        comment.value = ""
    })
}
