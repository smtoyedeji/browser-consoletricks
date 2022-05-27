const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log("Hello world!");

    // Interpolated
    console.log("Hello World, %s is a lifesaver", "console.log");

    // Styled
    console.log("%c This is some great text", "font-size: 20px; color: #333; background: #FFF");   

    // warning!
    console.warn("This is a warning");

    // Error :|
    console.error("Error found");

    // Info
    console.info("Javascript is amazing");

    // Testing
    console.assert(1 === 1, "This is wrong"); //code will only run if falsy
    console.assert(1 === 2, "This is wrong");
    const p = document.querySelector("p");
    console.assert(p.classList.contains("darkMode"), "This is wrong");

    // clearing
    //console.clear()

    // Viewing DOM Elements
    console.log(p);
    console.dir(p);
    
    //console.clear(); 

    // Grouping together
    dogs.forEach(dog => {
        console.groupCollapsed(`${dog.name}`);
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old`);
        console.log(`${dog.name} is ${dog.age * 7} dog years old`);
        console.groupEnd(`${dog.name}`);
      });

    // counting
    console.count('Wes');
    console.count('Wes');
    console.count('Steve');
    console.count('Steve');
    console.count('Wes');
    console.count('Steve');
    console.count('Wes');
    console.count('Steve');

    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      });

    console.table(dogs)
