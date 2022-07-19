const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name); // adds to the end
}


function destructivelyPrependCat(name) {
    cats.unshift(name); //a adds to the beg
}


function destructivelyRemoveLastCat(name) {
    cats.pop(name) // removes las eleemnt
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name) // remove first element
}

function appendCat(name) {
   const copyCats = [...cats, name];
   return copyCats

}
//function appendCat(name) {
    //  cats.push(name)
    //r
    //}
    
/*function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}


function prependCat(name) {
    const newCats = [name, ...cats];
    return newCats
}

function removeLastCat(name) {
   const newCats =  cats.slice(0, cats.length - 1);
   return newCats
}

function removeFirstCat(name) {
    const babyCats = cats.slice(1);
    return babyCats
} */