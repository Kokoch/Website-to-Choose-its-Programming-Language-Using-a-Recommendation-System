const languages = [
{name:"Ruby", ease:"1", description:"description of Ruby " },
{name:"C#", ease:"2", description:"description of C#" },
{name:"Rust", ease:"3", description:"description of Rust" },
{name:"JavaScript", ease:"4", description:"description of JavaScript" },
{name:"Ada", ease:"5", description:"description of Ada" },
{name:"Python", ease:"6", description:"description of Python" },
{name:"C", ease:"2", description:"description of C " },
{name:"Java", ease:"7", description:"description of Java" },
{name:"Lua", ease:"8", description:"description of Lua" },
{name:"Swift", ease:"9", description:"description of Swift" },
{name:"Go", ease:"10", description:"description of Go" },
{name:"Elixir", ease:"1", description:"description of Elixir" }
];

console.log(languages);
function renderCard(language) {
const card = `
 <div class="card ">
      <div class="card-body">
        <h5 class="card-title">${language.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${language.ease}</h6>
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
return language.description.toLowerCase().indexOf(input.toLowerCase()) >= 0
}