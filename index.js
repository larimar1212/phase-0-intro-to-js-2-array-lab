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
   const copyCats = [...cats, name]; // using var with array and 
   return copyCats // name param as elements for the returned array
   
   function prependCat(name) {
   const newCats = [name, ...cats]; // adding names first then spread 
   return newCats // to add new cats 
   }

}


function removeLastCat(name) {
   const newCats =  cats.slice(0, cats.length - 1);
   return newCats
}

function removeFirstCat(name) {
    const babyCats = cats.slice(1);
    return babyCats
} 