function search(){

    const request = document.getElementById("searchField").value.trim(); //getting what the user typed in the search field
	const url = "superheroes.php?request=" + encodeURIComponent(request);
    
    fetch(url)
	.then(response => response.text())
        .then(data => {
            document.getElementById("result").innerHTML = data;
        })
        .catch(error =>{
            document.getElementById("result").innerHTML = "There has been an error while loading the data.";
        });
}

let target = document.getElementById("search");
target.addEventListener("click",search);
