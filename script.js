let searchInput = document.querySelector(".header__search-input")
let searchButton = document.querySelector(".header__search-button")

let blockOne = document.getElementById("blockOne").outerHTML
let blockTwo = document.getElementById("blockTwo").outerHTML
let blockThree = document.getElementById("blockThree").outerHTML


let blockOneTxt = "bonuse 1"
let blockTwoTxt = "video"
let blockThreeTxt = "bonuse 2"

let searchArray = [blockOneTxt,blockTwoTxt,blockThreeTxt]


searchButton.addEventListener("click", function() {
        handleSearch();
    });
searchInput.addEventListener("keydown", function() {
        if (event.key === "Enter") {
            handleSearch();
        }
    });

    
function handleSearch() {
    let searchInputValue = searchInput.value
    for(let word of searchArray){
        if(word === searchInputValue){
            switch(searchInputValue){

                    case "bonuse 1":
                        this.sessionStorage.setItem("Result", blockOne)
                break;
                    case "video":
                        this.sessionStorage.setItem("Result", blockTwo)
                break;
                    case "bonuse 2":
                        this.sessionStorage.setItem("Result", blockThree)
                break;s
            }

            this.window.location.href="search.html";
            return
        }
    }
    this.alert("!!@@ Please enter correct !!@!!")
}