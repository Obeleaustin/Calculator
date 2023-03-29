//MY THOUGHT PROCESS

//First and formost we put
//into consideration basic the operators 
//of a calculator which are
//"addition", "substraction", "division", 

//"substraction", "equal to", "clear", and
//"clear all".

//then we create buttons for every single 
//digit and operator
//the numbers and all symbols should have
//a button.

//then grab all buttons

//then we style our preferred styling

//An event listener of click should be
//added to all buttons.

//when working on the calculator all input
//should be numbers as we to be working with
//numbers.

//for the basic functions of the calculator
//the arithimetic operators will be in 
//operation as we will be working using them



// mockup butttons in the html
//grab the buttons in js
//grab the input for the display
//listen to the number buttons and update the value to the display
//listen to the calculation symbols and clear the screen for the second parameters for its application
//perform the calculations where necesary when the equal sign is pressed
//display the result on the screen
//listen to the clear buttton and reset the screen to 0 when pressed
//make sure the 0 is replaced by the first number added to the display
 


//first and formost we grab every single button in our html and we declare 
let showDigit = [];
const deleteButton = document.getElementById('delete');
const clearAllButton = document.getElementById('clearAll');
const operationButton = document.querySelectorAll('.operators');
const numberButton = document.querySelectorAll('.numbers');
const equalToButton = document.getElementById('equalto');
const previousInputElement = document.getElementById('previoius-input');
let currentInputElement = document.getElementById('current-input');
console.log(clearAllButton)
console.log(equalToButton)
let firstSet = '';
let secondSet = '';
// let thirdSet = '';
// let fourthSet = '';
// let fifthSet = '';
let opValue = operationButton.values;
console.log(opValue);
let part1 = true;
let part2 = false;
// let part3 = true;




numberButton.forEach((button)=>{
    
    button.addEventListener('click', (ev)=>{
        console.log(ev.target.value)
        if(part1 === true){
            if(firstSet.length === 5){
                currentInputElement.innerHTML = 'max values reaached';
                return;
            }
            firstSet += ev.target.value;
            currentInputElement.innerHTML = firstSet;
        }
        if(!part1 === true){
            if(secondSet.length === 5){
                currentInputElement.innerHTML = 'max values reaached';
                return;
            }
            secondSet += ev.target.value;
            currentInputElement.innerHTML = secondSet;
        }
        if(part2 === false){
            if(thirdSet.length === 5){
                currentInputElement.innerHTML = 'max values reaached';
                return;
            }
            thirdSet += ev.target.value;
            currentInputElement.innerHTML = thirdSet;
        }
        // if(!part2 === true){
            //     if(fourthSet.length === 5){
                //         currentInputElement.innerHTML = 'max values reaached';
                //         return;
                //     }
        //     fourthSet += ev.target.value;
        //     currentInputElement.innerHTML = fourthSet;
        // }
        // if(part3 === true){
            //     if(fifthSet.length === 5){
                //         currentInputElement.innerHTML = 'max values reaached';
                //         return;
                //     }
                //     fifthSet += ev.target.value;
                //     currentInputElement.innerHTML = fifthSet;
                // }
        

       
            })   
        })

        deleteButton.addEventListener('click',(event)=>{
            if(currentInputElement){
                let newVal = firstSet.slice(0,firstSet.length-1)
                currentInputElement.innerHTML = newVal
                firstSet = newVal;
            }
            event.preventDefault()
            console.log(currentInputElement);
            
        })
        clearAllButton.addEventListener('click',(ev)=>{
            console.log('I entered here')
            if(currentInputElement){
                let newVal = '';
                currentInputElement.innerHTML = newVal
                firstSet = newVal;
            }
            ev.preventDefault()
        })
        let operate = ''
        let signs = ''
//console.log(operationButton)

operationButton.forEach((button)=>{

    button.addEventListener('click',(ev)=>{
        currentInputElement.innerHTML = ''
        console.log(ev.target.value)
        signs = ev.target.value
        switch(signs){
            case '/':
            operate = ev.target.value;
            part1 = false
                break
            case '+':
            // currentInputElement.innerHTML = '+';
            operate = ev.target.value;
            part1 = false
                break
            case '-':
                // currentInputElement.innerHTML = '-';
            operate = ev.target.value;
            part1 = false
                break
            case 'x':
                // currentInputElement.innerHTML = '/'
            operate = ev.target.value;
            part1 = false
                break

        }
        // let newVal = signs;
        // currentInputElement.innerHTML = newVal;
        // firstSet = '';
        ev.preventDefault();
    
    })
    
})
// console.log(operationButton.value)

equalToButton.addEventListener('click',(event)=>{
    let sign = operationButton.value
    if(operate === '+'){
        let result= Number(firstSet)  +  Number(secondSet) 
        // + Number(fourthSet) + Number(fifthSet)
        currentInputElement.innerHTML = result   
        firstSet = ''
        secondSet = ''
        part1 = true
    }
    if(operate === '-'){
        let result= Number(firstSet)  -  Number(secondSet) 
        // + Number(fourthSet) + Number(fifthSet)
        currentInputElement.innerHTML = result   
        firstSet = ''
        secondSet = ''
        part1 = true
    }
    if(operate === 'x'){
            let result= Number(firstSet)  *  Number(secondSet) 
            // + Number(fourthSet) + Number(fifthSet)
            currentInputElement.innerHTML = result   
            firstSet = ''
            secondSet = ''
            part1 = true
    }
    if(operate === '/'){
        let result= Number(firstSet)  /  Number(secondSet) 
        // + Number(fourthSet) + Number(fifthSet)
        currentInputElement.innerHTML = result   
        firstSet = ''
        secondSet = ''
        part1 = true
}
})