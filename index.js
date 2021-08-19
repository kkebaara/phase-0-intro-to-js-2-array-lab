// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name){
    cats.unshift(name)

}

function destructivelyRemoveLastCat(name){
    cats.pop(name)
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name)
}

function appendCat(name){
 const app2 = [...cats, name];
 return app2
}

function prependCat(name){
    const app2 = [name, ...cats];
    return app2;
}

function removeLastCat(){
  return cats.slice(0, cats.length - 1);

}

function removeFirstCat(){
 return cats.slice(1)

}