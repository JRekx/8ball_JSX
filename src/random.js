/**Return Random Item from List */

function choice(arr){
    let randomIndex = Math.floor(math.random() * arr.length);
    return arr[randomIndex];

}

export { choice };