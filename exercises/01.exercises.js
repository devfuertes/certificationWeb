function render(value) {
    console.log(value);
}


function reverseText() {
    //const userText = prompt('Escribe una palabra');
    const userText = 'Casa' 
    const result = userText.split('').reverse().join('');

    return result;
}


function reverseText2(value) {
    
    let acummulator = '' 

    for (let i = value.length -1; i >= 0; i--) {
        const element = value[i]
        acummulator += element
        
    }
    return acummulator
} 

render(reverseText());
render(reverseText2('pantone'));