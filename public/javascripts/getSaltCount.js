window.onload=function(){
    console.log("load complete");
    getSaltCount()
    //Add eventListener for the salt button
    let saltButton = document.querySelector(".saltForm");
    saltButton.addEventListener("submit", (event) => {
        getSaltCount(true);
        event.preventDefault();
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

