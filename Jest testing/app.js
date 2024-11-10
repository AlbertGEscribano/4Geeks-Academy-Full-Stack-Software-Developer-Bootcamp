const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))


function fromDollarToYen (num){
    return num * 1.2*127.9

}

function fromEuroToDollar (num){
    return num*1.2
}


function fromYenToPound (num){
    return num / 102.32
}

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};