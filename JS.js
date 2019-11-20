const languages = [
    {
        name: "Ada",
        ease: 5.5,
        description: "Ada was created in 1980 by Jean Ichbiah under contract to the United States Department of Defense ; structured, statically typed, imperative, and object-oriented high-level programming language; features of ADA include: strong typing, run-time checking, parallel processing and exception handling",
        background: "purple"
    },
    {
        name: "C",
        ease: 5,
        description: "The C language is a structure oriented programming language developed by Dennis Ritchie. The C programming language is used for developing system applications that forms a major portion of operating systems such as Windows, UNIX and Linux.\n" +
            "Therefore, program that is written in C and that respects certain limitations can be compiled for many different platforms. C is a very portable programming language.\\n" +
            "It is a procedural language, which means that people can write their programs as a series of step-by-step instructions.\n" +
            "The language itself has very few keywords, and most things are done using libraries, which are collections of code for them to be reused. To conclude C is a general-purpose and object-oriented programming language.",
        background: "blue"
    },
    {name: "C#", ease: 5.5, description: "description of C#", background: "green"},
    {name: "Elixir", ease: 1, description: "Plataformatec, a software consultancy, created Elixir in 2012 as a Research and Development project led by José Valim. Elixir’s goal is to be a productive language for writing maintainable and reliable software.\n" +
            "Elixir runs on top of the Erlang Virtual Machine, which provides a scalable and fault-tolerant foundation. To cope with failures, Elixir provides supervisors which describe how to restart parts of your system when things go awry.\n" +
            "Elixir use functional programming to promotes a coding style that helps developers write code that is short, concise.\n" +
            "Elixir ships with a great set of tools to ease development. Mix is a build tool that allows you to easily create projects, manage tasks, run tests...", background: "purple"},
    {name: "Go", ease: 10, description: "description of Go", background: "lblue"},
    {
        name: "Java",
        ease: 5,
        description: "Java Programming Language was written by James Gosling, initially it was named oak Programming Language.\n" +
            "A Java program when compiled produce byte codes. These byte codes can be transferred via network and can be executed by any Java virtual Machine on Windows, Linux, Mac or any other JVM and get same result every time. ‘Write once, Run Anywhere'. \n" +
            "Java is programming language the syntax of which is human readable.\n" +
            "Java is called General Purpose programming language because its capabilities are not limited to any specific application domain rather it can be used in various application domain.\n" +
            "Java is a class and object oriented programming language which means Java supports inheritance feature of object-oriented Programming Language. ",
        background: "red"
    },
    {name: "JavaScript", ease: 5, description: "description of JavaScript chien chat ballon", background: "yellow"},
    {name: "Lua", ease: 8, description: "description of Lua", background: "blue"},
    {
        name: "Python",
        ease: 7,
        description: "Python was created by Guido van Rossum and first released in 1991 ; interpreted (executed direcly, doesn’t need compiling), high-level (closer to natural language), general-purpose language ; very popular, has the reputation of being easy to read and to learn",
        background: "yellow"
    },
    {name: "Ruby", ease: 1, description: "description of Ruby chien ballon ", background: "red"},
    {name: "Rust", ease: 3, description: "description of Rust chat", background: "gray"},
    {name: "Swift", ease: 9, description: "Swift was introduced at Apple's 2014 Worldwide Developers Conference and it is an alternative to the Objective-C language .\n" +
            "Swift is a general-purpose, multi-paradigm, powerful and intuitive programming language for macOS, iOS, watchOS, tvOS and beyond. Writing Swift code is interactive and fun, the syntax is concise yet expressive, and Swift includes modern features developers love. Swift code is safe by design, yet also produces software that runs lightning-fast.", background: "orange"},
];


function renderCard(language) {
    const card = `
     <div class="card ${language.background}">
          <div class="card-body">
            <h5 class="card-title">${language.name}</h5>
            <h5 class="card-subtitle mb-2 text-muted"><u>ease of learning: ${language.ease}/10</u></h5>
            <p class="card-text">${language.description}</p>
            <a href="#" class="card-link ">Card link</a>
          </div>
        </div>
    `;
    const div = document.getElementById("search-result");
    div.innerHTML += card;
}

function clearCards() {
    const div = document.getElementById("search-result");
    div.innerHTML = "";
}

function renderAllCard() {
    clearCards();
    languages.forEach(renderCard);
}

function onInputChange(event) {
    const input = event.target.value.trim();
    displayCards();
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

function displayCards() {
    document.getElementById('formPage').style.display = 'none';
    document.getElementById('aboutPage').style.display = 'none';
    document.getElementById('sourcesPage').style.display = 'none';
    document.getElementById('cardsPage').style.display = 'contents';
}

function displayForm() {
    document.getElementById('cardsPage').style.display = 'none';
    document.getElementById('aboutPage').style.display = 'none';
    document.getElementById('sourcesPage').style.display = 'none';
    document.getElementById('formPage').style.display = 'contents';
}

function displayAbout() {
    document.getElementById('cardsPage').style.display = 'none';
    document.getElementById('formPage').style.display = 'none';
    document.getElementById('sourcesPage').style.display = 'none';
    document.getElementById('aboutPage').style.display = 'contents';
}

function displaySources() {
    document.getElementById('cardsPage').style.display = 'none';
    document.getElementById('formPage').style.display = 'none';
    document.getElementById('aboutPage').style.display = 'none';
    document.getElementById('sourcesPage').style.display = 'contents';
}




