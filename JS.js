const languages = [
{name:"Ruby", ease:"1", description:"description of Ruby ", bg:"red" },
{name:"C#", ease:"2", description:"description of C#", bg:"green" },
{name:"Rust", ease:"3", description:"description of Rust", bg:"gray" },
{name:"JavaScript", ease:"4", description:"description of JavaScript", bg:"yellow" },
{name:"Ada", ease:"5", description:"description of Ada", bg:"purple" },
{name:"Python", ease:"6", description:"description of Python", bg:"yellow" },
{name:"C", ease:"2", description:"description of C ", bg:"blue" },
{name:"Java", ease:"7", description:"description of Java", bg:"red" },
{name:"Lua", ease:"8", description:"description of Lua", bg:"blue" },
{name:"Swift", ease:"9", description:"description of Swift", bg:"orange" },
{name:"Go", ease:"10", description:"description of Go", bg:"lblue" },
{name:"Elixir", ease:"1", description:"description of Elixir", bg:"purple" }
];


function renderCard(language) {
    const card = `
     <div class="card ${language.bg}">
          <div class="card-body">
            <h5 class="card-title">${language.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">ease of learning: ${language.ease}/10</h6>
            <p class="card-text">${language.description}</p>
            <a href="#" class="card-link">Card link</a>
          </div>
        </div>
    `;
    const div = document.getElementById("search-result")
    div.innerHTML += card;
}

function renderAllCard() {
    languages.forEach(renderCard)
}

function onInputChange(event) {
    const input = event.target.value;
    const result = languages.filter(language => containsInput(language,input))
    const div = document.getElementById("search-result")
    div.innerHTML = "";
    result.forEach(renderCard)
}

function containsInput(language,input) {
    const languageText = language.description.toLowerCase() + language.name.toLowerCase();
    return languageText.indexOf(input.toLowerCase()) >= 0;
}