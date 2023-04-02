function callbackFunction(){
    console.log("Hello")
}

const receivesAFunction = function (callbackFunction) {
   callbackFunction()
}

function returnsANamedFunction(){
    const returnedFunction = function(){
        console.log("redundant")
    }
    return returnedFunction
}

function returnsAnAnonymousFunction(){
    let x = 2
    let x0 = 7
    return function(){
        return console.log(x+x0)
    }
}