const PrimeNumbers = (Nums) => {
    primes = []
    notPrimes = []
    if(Array.isArray(Nums)){
        for(let i = 0; i < Nums.length; i++){
            
            let d = 2
            while (d <= Math.sqrt(Nums[i])){
                if (Nums[i] % d == 0){
                    notPrimes.push(Nums[i])
                    
                }
                d++
                
            }
            if (notPrimes.indexOf(Nums[i], 0) === -1){
                primes.push(Nums[i])
            }
            

        }
    } else{
        
        let d = 2
        while (d <= Math.sqrt(Nums)){
            if (Nums % d == 0){
                notPrimes.push(Nums)
            }
            d++
            
        }
        if (notPrimes.indexOf(Nums, 0) === -1){
            primes.push(Nums)
        }
    }
    console.log(primes, " простые ", notPrimes, " не простые ")
    return
}
PrimeNumbers(6)

const countVowels = (str) =>{
    vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я']
    vowelsAmount = 0
    for(let i = 0; i < str.length; i++){
        if(vowels.indexOf(str[i], 0) !== -1){
            vowelsAmount++
        }
    }
    return vowelsAmount
}

console.log(countVowels("аааббв"))

const uniqueElements = (arr) =>{
    obj = {}
    for(let i = 0; i < arr.length; i++){
        if (obj.hasOwnProperty(arr[i])) {
            obj[arr[i]]++;
        } else {
            obj[`${arr[i]}`] = 1;
        }
    }
    return obj
}
console.log(uniqueElements(['привет', 'привет', 'hello', 1, '1']))

const mergeObjects = (obj1, obj2) =>{
    return Object.assign(obj1, obj2)
}
console.log(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 }))

const convertArrayOfObjectsToArray = (arr) => {
    let resultArray = arr.map(({id, name}) => (name))
    return resultArray
}
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
  ];
console.log(convertArrayOfObjectsToArray(users))

const mapObject = (obj, callback) => {
    returnObject = {}
    values = Object.values(obj)
    changedValues = values.map(callback)
    keys = Object.keys(obj)
    for(let i = 0; i < keys.length;i++){
        returnObject[keys[i]] = changedValues[i];
    }
    return returnObject
}

const nums = { a: 1, b: 2, c: 3 };
console.log(mapObject(nums, x => x * 2)) // { a: 2, b: 4, c: 6 }

const generatePassword = (len) => {
    let specialChars = ['!', '?', '.', ',', ';', ':', '…', '-', '—', '(', ')', '[', ']', '{', '}', '+', '-', '×', '÷', '=', '≠', '≈', '<', '>', '≤', '≥', '√', '∞', '∑', '∫', 'π', '$', '€', '£', '¥', '¢', '₽', '₹', '←', '→', '↑', '↓', '↔', '↕', '↖', '↗', '↘', '↙', '❤', '★', '☆', '☀', '☁', '☂', '✓', '✕', '⚡', '⛄', '✨', '☯', '@', '#', '%', '&', '*', '|', '\\', '/', '~', '`', '^', '⌘', '⌥', '⌫', '⏎']
    let upperCaseChars = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let lowerCaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я']
    let digits = ['1','2','3','4','5','6','7','8','9','0']
    let allChars = []
    for(let i = 0; i < specialChars.length; i++){
        allChars.push(specialChars[i])
    }
    for(let i = 0; i < upperCaseChars.length; i++){
        allChars.push(upperCaseChars[i])
    }
    for(let i = 0; i < lowerCaseChars.length; i++){
        allChars.push(lowerCaseChars[i])
    }
    for(let i = 0; i < digits.length; i++){
        allChars.push(digits[i])
    }
    let usedPlaces = []
    let password = ""
    if (len < 4){
        return "inrorrect length"
    }    

    let randomSpecialCharPlace = Math.floor(Math.random() * len);
    usedPlaces.push(randomSpecialCharPlace)

    let randomUpperCaseCharPlace = randomSpecialCharPlace;
    while(usedPlaces.indexOf(randomUpperCaseCharPlace) !== -1){
        randomUpperCaseCharPlace = Math.floor(Math.random() * len)
    }
    usedPlaces.push(randomUpperCaseCharPlace)

    let randomDigitPlace = randomSpecialCharPlace;
    while(usedPlaces.indexOf(randomDigitPlace) !== -1){
        randomDigitPlace = Math.floor(Math.random() * len)
    }
    usedPlaces.push(randomDigitPlace)

    let randomLowerCaseCharPlace = randomSpecialCharPlace;
    while(usedPlaces.indexOf(randomLowerCaseCharPlace) !== -1){
        randomLowerCaseCharPlace = Math.floor(Math.random() * len)
    }
    usedPlaces.push(randomLowerCaseCharPlace)

    for(let i = 0; i < len; i++){
        if (i === randomSpecialCharPlace){
            password += specialChars[Math.floor(Math.random() * specialChars.length)]
        }
        else{
            if (i === randomUpperCaseCharPlace){
                password += upperCaseChars[Math.floor(Math.random() * upperCaseChars.length)]
            } 
            else{
                if (i === randomDigitPlace){
                    password += digits[Math.floor(Math.random() * digits.length)]
                } 
                else{
                    if (i === randomLowerCaseCharPlace){
                        password += lowerCaseChars[Math.floor(Math.random() * lowerCaseChars.length)]
                    } 
                    else {
                        password += allChars[Math.floor(Math.random() * allChars.length)]
                    }
                }
            }
        
        
        }
    }
    return password
}
console.log("randomPassword: ", generatePassword(100))