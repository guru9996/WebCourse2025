//task 1 longreed
console.log('***Task1:')
const task1 = (a, b, c) =>{
    
    let d = Math.pow(b,2) - 4 * a * c
    let x1 = (b + Math.sqrt(d))/2
    let x2 = (b - Math.sqrt(d))/2
    if (d >= 0){//я пытался в ninja код, но я не смог
        return `Первый орень: ${x1}, Второй корень: ${x2}`
    } 
    else {
        return "корней нет"
    }
    
}
console.log(task1(1,2,1) )

//task1-task2 DOM
let i = 0
const onClick = () =>{
    i++
    if((i % 5 == 0) && (i % 10 != 0)){
        pickme.className = "blue-button"
    }
    if((i % 5 != 0) && (i % 10 != 0)){
        pickme.className = ""
    }
    if(i % 10 == 0){
        pickme.className = "red-button"
    }
    pickme.innerHTML=`Вы нажали ${i} раз`
}

let pickme = document.getElementById("pickme")
pickme.addEventListener("mousedown", onClick)


//task 2 longreed
num = 9
console.log('***Task2:')
const task2 = (n) =>{
    if (n == 2){
        return true
    }
    let d = 2
    while (d <= Math.sqrt(n)){
        d++
        if (n % d == 0){
            return false
        }
        
    }
    return true
}
if (task2(num)){//я пытался в ninja код, но я не смог
    console.log(`число ${num} простое`)
} else{
    console.log(`число ${num} составное`)
}

//task 3 longreed
console.log('***Task3:')
number = 426
const task3 = (n) =>{
    let divs = []
    for (i = 2;i < n;i++){
        
        if (n % i == 0){
            divs.push(i)
        }
        
    }
    return divs
}
console.log(`для числа ${number} делители: ${task3(number)}`)


console.log('***Task4:')
//task 4 longreed
let array = [1, 2, 3, 4, 5, 9]

const task4 = (arr, num) =>{
    let i = 0
    let j = arr.length - 1
    let d
    while (i <= j){
        d = Math.floor((i + j), 2)
        if (arr[d] > num){
            j = d - 1
        } else if (arr[d] < num){
            i = d + 1
        } else if (arr[d]=num ){
            return d
        }

    }
    return "такого элемента в массиве нет"
}
console.log(task4(array, 4))


