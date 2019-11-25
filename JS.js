const languages = [
    {
        name: "Ada",
        ease: 5.5,
        description: "Ada was originally designed by a team led by French computer scientist Jean Ichbiah under contract to the United States Department of Defense.\n" +
            "Ada use an extremely strong, static and safe type system, which allows the programmer to construct powerful abstractions that reflect the real world, and allows the compiler to detect many logic faults before they become errors.\n" +
            "The language separates interfaces from implementation, and provides fine-grained control over visibility. Ada source text is very portable across compilers and across target hardware platforms. Most often, the program can be recompiled without any changes. Ada is an object-oriented and high-level programming language.",
        background: "purple", link:"/languages-recommendation-system/languages/Ada.html"
    },

    {
        name: "C",
        ease: 5,
        description: "The C language is a structure oriented programming language developed by Dennis Ritchie. The C programming language is used for developing system applications that forms a major portion of operating systems such as Windows, UNIX and Linux.\n" +
            "Therefore, program that is written in C and that respects certain limitations can be compiled for many different platforms. C is a very portable programming language.\\n" +
            "It is a procedural language, which means that people can write their programs as a series of step-by-step instructions.\n" +
            "The language itself has very few keywords, and most things are done using libraries, which are collections of code for them to be reused. To conclude C is a general-purpose and object-oriented programming language.",
        background: "blue", link:"/languages-recommendation-system/languages/C.html"
    },

    {name: "C#", ease: 5.5, description: "description of C#", background: "green", link:"/languages-recommendation-system/languages/C1.html"},

    {name: "Elixir", ease: 1, description: "Plataformatec, a software consultancy, created Elixir in 2012 as a Research and Development project lead by José Valim. Elixir’s goal is to be a productive language for writing maintainable and reliable software.\n" +
            "Elixir runs on top of the Erlang Virtual Machine, which provides a scalable and fault-tolerant foundation. To cope with failures, Elixir provides supervisors which describe how to restart parts of your system when things go awry.\n" +
            "Elixir use functional programming to promotes a coding style that helps developers write code that is short, concise.\n" +
            "Elixir ships with a great set of tools to ease development. Mix is a build tool that allows you to easily create projects, manage tasks, run tests...", background: "purple", link:"/languages-recommendation-system/languages/Elixir.html"},

    {name: "Go", ease: 10, description: "description of Go", background: "lblue", link:"/languages-recommendation-system/languages/Go.html"},

    {
        name: "Java",
        ease: 5,
        description: "Java Programming Language was written by James Gosling, initially it was named oak Programming Language.\n" +
            "A Java program when compiled produce byte codes. These byte codes can be transferred via network and can be executed by any Java virtual Machine on Windows, Linux, Mac or any other JVM and get same result every time. ‘Write once, Run Anywhere'. \n" +
            "Java is programming language the syntax of which is human readable.\n" +
            "Java is called General Purpose programming language because its capabilities are not limited to any specific application domain rather it can be used in various application domain.\n" +
            "Java is a class and object oriented programming language which means Java supports inheritance feature of object-oriented Programming Language. ",
        background: "red", link:"/languages-recommendation-system/languages/Java.html"
    },

    {name: "JavaScript", ease: 5, description: "description of JavaScript chien chat ballon", background: "yellow", link:"/languages-recommendation-system/languages/JS.html"},

    {name: "Lua", ease: 8, description: "description of Lua", background: "blue", link:"/languages-recommendation-system/languages/Lua.html"},

    {
        name: "Python",
        ease: 7,
        description: "Python was created by Guido van Rossum and first released in 1991 ; interpreted (executed direcly, doesn’t need compiling), high-level (closer to natural language), general-purpose language ; very popular, has the reputation of being easy to read and to learn",
        background: "yellow", link:"/languages-recommendation-system/languages/Python.html"
    },

    {name: "Ruby", ease: 1, description: "Ruby was conceived and developed by Yukihiro Matsumoto of Japan in 1993-1995.\n" +
            "Ruby is a dynamic, open-source, object-oriented programming language.\n" +
            "In Ruby, everything is an object. Every bit of information and code can be given their own properties and actions. \n" +
            "Ruby is seen as a flexible language, since it allows its users to freely alter its parts. Essential parts of Ruby can be removed or redefined, at will. Ruby tries not to restrict the coder.\n" +
            "Ruby has exception handling features to make it easy to handle errors.Ruby is highly portable: it is developed mostly on GNU/Linux, but works on many types of UNIX, macOS, Windows...", background: "red", link:"/languages-recommendation-system/languages/Ruby.html"},

    {name: "Rust", ease: 3, description: "Rust has been the \"most loved programming language\" in the Stack Overflow Developer Survey every year since 2016.\n" +
            "Rust is blazingly fast and memory-efficient: with no runtime or garbage collector, it can power performance-critical services, run on embedded devices, and easily integrate with other languages.\n" +
            "Rust’s rich type system guarantee memory-safety and enable you to eliminate many classes of bugs at compile-time.\n" +
            "Rust is a multi-paradigm programming language. Rust has great documentation, a friendly compiler with useful error messages, and top-notch tooling, an integrated package manager and build tool, smart multi-editor support with auto-completion and type inspections, an auto-formatter, and more.", background: "gray", link:"/languages-recommendation-system/languages/Rust.html"},

    {name: "Swift", ease: 9, description: "Swift was introduced at Apple's 2014 Worldwide Developers Conference .\n" +
            "Swift is a general-purpose, multi-paradigm, powerful and intuitive programming language for macOS, iOS, watchOS, tvOS and beyond. Writing Swift code is interactive and fun, the syntax is concise yet expressive, and Swift includes modern features developers love. Swift code is safe by design, yet also produces software that runs lightning-fast.",
        background: "orange", link:"/languages-recommendation-system/languages/Swift.html"},
];


function renderCard(language) {
    const card = `
     <div class="card ${language.background}">
          <div class="card-body">
            <h5 class="card-title">${language.name}</h5>
            <h5 class="card-subtitle mb-2 text-muted"><u>ease of learning: ${language.ease}/10</u></h5>
            <p class="card-text">${language.description}</p>
            <a href="${language.link}" class="card-link ">Card link</a>
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




