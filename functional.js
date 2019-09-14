let numbers = [4, 6, 7, 32, 45, 4];

function addAllArrayElements(elements) {
return elements.reduce((addition, element) => {
addition += element;
return addition;
}, 0);
}

console.log(addAllArrayElements(numbers));
