const languages = [
    {
        name: "Ada",
        ease: 5,
        description: "Ada was created in 1980 by Jean Ichbiah under contract to the United States Department of Defense ; structured, statically typed, imperative, and object-oriented high-level programming language; features of ADA include: strong typing, run-time checking, parallel processing and exception handling",
        background: "purple"
    },
    {
        name: "C",
        ease: 2,
        description: "C was created by Dennis Ritchie and first appeared in 1972 ; general-purpose, object-oriented language ; cross-platform ; one of the most widely used languages, influenced a lot of well-known languages (C++, Java, Javascript, Python…)",
        background: "blue"
    },
    {name: "C#", ease: 2, description: "description of C#", background: "green"},
    {name: "Elixir", ease: 1, description: "description of Elixir", background: "purple"},
    {name: "Go", ease: 10, description: "description of Go", background: "lblue"},
    {
        name: "Java",
        ease: 7,
        description: "Java was created by James Gosling and released in 1996 ; general-purpose, object-oriented language ; can run on all platforms that support Java without the need for recompilation (= very portable), extremely popular (particularly for client-server web applications)",
        background: "red"
    },
    {name: "JavaScript", ease: 4, description: "description of JavaScript", background: "yellow"},
    {name: "Lua", ease: 8, description: "description of Lua", background: "blue"},
    {
        name: "Python",
        ease: 6,
        description: "Python was created by Guido van Rossum and first released in 1991 ; interpreted (executed direcly, doesn’t need compiling), high-level (closer to natural language), general-purpose language ; very popular, has the reputation of being easy to read and to learn",
        background: "yellow"
    },
    {name: "Ruby", ease: 1, description: "description of Ruby ", background: "red"},
    {name: "Rust", ease: 3, description: "description of Rust", background: "gray"},
    {name: "Swift", ease: 9, description: "description of Swift", background: "orange"},
];


function renderCard(language) {
    const card = `
     <div class="card ${language.background}">
          <div class="card-body">
            <h5 class="card-title">${language.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">ease of learning: ${language.ease}/10</h6>
            <p class="card-text">${language.description}</p>
            <a href="#" class="card-link">Card link</a>
          </div>
        </div>
    `;
    const div = document.getElementById("search-result");
    div.innerHTML += card;
}


function clearCards(){
    const div = document.getElementById("search-result");
    div.innerHTML = "";
}

function renderAllCard() {
    clearCards();
    languages.sort((language1, language2) => language1.name - language2.name);
    languages.forEach(renderCard);
}

function onInputChange(event) {
    const input = event.target.value.trim();
    if (input.length === 0) {
        renderAllCard()
    } else {
        const result = languages.filter(language => getLanguageScore(language, input) > 0);
        result.sort((language1, language2) => getLanguageScore(language2, input) - getLanguageScore(language1, input));
        clearCards();
        result.forEach(renderCard);
    }
}

function getLanguageScore(language, input) {
    const words = input.split(' ').filter(word => word.length > 0);
    const languageText = language.description.toLowerCase() + language.name.toLowerCase();
    const wordsIncluded = words.map(word => languageText.includes((word.toLowerCase())));
    return wordsIncluded.filter(included => included === true).length
}



function changeEaseLevel(event) {
    console.log(event.target.value);
}