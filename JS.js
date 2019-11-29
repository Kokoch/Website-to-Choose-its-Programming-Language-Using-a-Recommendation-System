const languages = [
    {
        name: "Ada",
        ease: 5,
        description: "Ada was initially planned by a group drove by French PC researcher Jean Ichbiah under agreement to the United States Department of Defense.\n"+
            "Ada utilize an incredibly solid, static and safe sort framework, which enables the developer to build amazing deliberations that mirror this present reality, and enables the compiler to identify numerous rationale blames before they become mistakes.\n"+
            " The language isolates interfaces from usage, and gives fine-grained power over perceivability. Ada source content is entirely compact crosswise over compilers and crosswise over target equipment stages. Regularly, the program can be recompiled with no changes. Ada is an article situated and elevated level programming language",
        background: "purple", link:"/languages-recommendation-system/languages/Ada.html"
    },

    {
        name: "C",
        ease: 5,
        description: "The C language is a structure oriented programming language created by Dennis Ritchie.\n"+
            " The C programming language is utilized for creating framework applications that structures a significant segment of working frameworks, for example, Windows, UNIX and Linux. Accordingly, program that is written in C and that regards certain impediments can be assembled for a wide range of stages. It is a procedural language, which implies that individuals can compose their projects as a progression of bit by bit guidelines.\n"+
            " The language itself has not very many watchwords, and most things are finished utilizing libraries, which are assortments of code for them to be reused. To finish up C is a universally useful and objet-oriented programming language.",
        background: "blue", link:"/languages-recommendation-system/languages/C.html"
    },

    {name: "C#", ease: 6, description: " C# is a language developed around 2000 by Anders Hejlsberg for Microsoft as part of its .NET software framework. It was designed to be a simple a general purpose language which main use is for the development of software in distributed environments.\n"+
            " C# is object oriented and is portable (CLI). It is currently(November 2019) at 5th place in TIOBE Index.", background: "green", link:"/languages-recommendation-system/languages/C1.html"},

    {name: "Elixir", ease: 1, description: "Plataformatec, a product consultancy, made Elixir in 2012 as a Research and Development venture lead by José Valim. Elixir is a beneficial language for coding viable and solid programs.\n"+
            "Elixir runs over the Erlang Virtual Machine, which gives a versatile and shortcoming tolerant establishment. To adapt to disappointments, Elixir gives administrators which depict how to restart portions of your framework when things go astray.\n"+
            "Elixir utilize useful programming to advances a coding style that assists designers with composing code that is short, succinct.\n"+
        "Elixir ships with an extraordinary arrangement of devices to ease improvement. Mix is a form device that enables you to effortlessly make ventures, oversee undertakings, run tests…", background: "purple", link:"/languages-recommendation-system/languages/Elixir.html"},

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

    {name: "JavaScript", ease: 6, description: "Javascript: Javascript is a language developed and afterward released in 1995 by Brendan Eich for Netscape Communications as an approach to improve the Netscape Navigator and compete with Microsoft.\n"+
            " It was intended to supplement and have a comparative linguistic structure as Java. Javascript is a High level, portable,object oriented programming language. It is currently(November 2019) at 7th place in TIOBE Index.",
        background: "yellow", link:"/languages-recommendation-system/languages/JS.html"},

    {name: "Lua", ease: 8, description: "Lua can be a powerful, efficient, light-weight, embeddable scripting language. It supports procedural programming, object-oriented programming, practical programming, data-driven programming, and information description.\n"+
            "Lua is presently the leading scripting language in games.(ex: World of Warcraft and Angry Birds). To say to be \"as quick as Lua\" is an aspiration of alternative scripting languages. Lua is builds out-of-the-box in all platforms that have a standard C compiler.\n" +
            " Lua runs on all flavors of Unix and Windows, on mobile devices, so Lua is very portable. It is easy to extend Lua with libraries written in other languages. Lua combines also a very simple procedural syntax.",
        background: "blue",
        link:"/languages-recommendation-system/languages/Lua.html"},

    {
        name: "Python",
        ease: 7,
        description: "Python was created by Guido van Rossum and it first released in 1991. Python is AN understood, object-oriented, high-level programing language with dynamic linguistics.\n"+
            " Its high-level inbuilt information structures, combined with dynamic typewriting and dynamic binding, create it terribly engaging for fast Application Development. In addition as to be used as a scripting Python supports modules and packages, which inspires program modularity and code utilise.\n"+
            " There is no compilation step, the edit-test-debug cycle is unbelievably quick. Python is the programming language use to develop artificial intelligence.",
        background: "yellow", link:"/languages-recommendation-system/languages/Python.html"
    },

    {name: "Ruby", ease: 1, description: "Ruby was conceived and developed by Yukihiro Matsumoto of Japan in 1993-1995.\n"+
            " Every bit of information and code are often given their own properties and actions. Ruby is seen as a versatile language, since it permits its users to freely alter its elements.\n"+
            " Essential elements of Ruby are often removed or redefined, at will. Ruby has exception handling features to make it easy to handle errors. Ruby is highly portable: it is developed mostly on GNU/Linux, but works on many types of UNIX, macOS, Windows… ",
        background: "red", link:"/languages-recommendation-system/languages/Ruby.html"},

    {name: "Rust", ease: 3, description: "Rust has been the \"most dear programming language\" within the Stack Overflow Developer Survey each year since 2016. Rust is blazingly quick and memory-efficient: with no runtime , it will power performance-critical services, run on embedded devices, and simply integrate with alternative languages.\n"+
        "Rust’s rich type system guarantee memory-safety and enable you to eliminate many classes of bugs at compile-time.\n"+
    "Rust is a multi-paradigm programming language. Rust has great documentation, a friendly compiler with useful error messages, and top-notch tooling, an integrated package manager and build tool, smart multi-editor support with auto-completion and type inspections, an auto-formatter, and more.",
        background: "gray", link:"/languages-recommendation-system/languages/Rust.html"},

    {name: "Swift", ease: 9, description: "Swift was released possible at Apple's 2014 World Developer Conference.\n" +
            "Swift is a general-purpose, multi-paradigm, powerful and intuitive programming language for macOS, iOS, watchOS, tvOS and beyond. Writing Swift code is interactive and fun, the syntax is interactive and communicative , and Swift includes trendy features developers love.",
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

    if (document.getElementsByClassName('valueTarget1').checked) {
        let valour = document.getElementsByClassName('valueTarget').value;
        console.log(valour);
    }
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
