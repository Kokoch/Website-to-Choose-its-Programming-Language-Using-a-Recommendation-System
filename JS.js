console.log("Hello Pecheur");




function SearchFun() {
    // Declare variables
    var input, filter, infoSearch, paragraph, a, i, txtValue;
    input = document.getElementById('SearchBar');
    filter = input.value;
    console.log(filter)
    infoSearch = document.getElementById("AccesSearch");
    paragraph = infoSearch.getElementsByTagName('p');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < paragraph.length; i++) {
      txtValue  = paragraph[i].getElementsByTagName("p")[0];
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        paragraph[i].style.display = "";
      } else {
        paragraph[i].style.display = "none";
      }
    }
  }



/*const SearchFun=() => {
    let input=document.getElementById("SearchBar").value.toUpperCase();
    console.log(input);
    let infoSearch = document.getElementById("AccesSearch");
    console.log(infoSearch);
    console.log(infoSearch.textContent);
    let paragraph = document.getElementsByTagName("p");
    console.log(paragraph);
      for(var i = 0; i<paragraph.length; i++){
          let textvalue = paragraph.textContent || paragraph.innerHTML;
          console.log(textvalue)
          if (input=textvalue.toUpperCase().indexOf(filter)>-1){
              infoSearch[i].classList.add('filtered');
          }else{
             infoSearch[i].classList.add('notfiltered');
         }
      }
    }*/




