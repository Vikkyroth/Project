//nomer 1
function modus(arr){
    return (
        arr.filter((i) => arr.filter((j) => j == i).length > arr.length / 2)[0] || 0
    );
}

console.log(modus([1,1,2,3,1]))

