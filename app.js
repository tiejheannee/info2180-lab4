function search(){
	fetch("superheroes.php")
	.then(response => response.text())
        .then(data => {
            alert(data);
        })
        .catch(error => console.error("Error:", error));
}

let target = document.getElementById("search");
target.addEventListener("click",search);
