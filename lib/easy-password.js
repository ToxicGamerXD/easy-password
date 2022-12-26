/**
 * 
 * @example
 * // Simple Password generation
 * console.log(password(15, {uppercase: true}))
 */

module.exports = function (length = 15, options = {uppercase, numbers, special_character} = {uppercase: false, numbers: false, special_character: false}) {
    if(length == undefined) length = 15
    
    if(options.uppercase == undefined) options.uppercase = false
    if(options.numbers == undefined) options.numbers = false
    if(options.special_character == undefined) options.special_character = false

    let password = ""

    let lower_abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let upper_abc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    let numbers = ["1","2","3","4","5","6","7","8","9","0"]
    let special_character = ["~","`","!","@","#","$","%","^","&","*","(",")","-","_","+","=","{","}","[","]","|","/",":",";",".","?","<",">","\\"]

    let letters = `${lower_abc}`
    if(options.uppercase == true) letters += upper_abc
    if(options.numbers == true) letters += numbers
    if(options.special_character == true) letters += special_character

    letters = letters.replaceAll(",", "")

    for(i = 0; i < length; i++) {
        let letter = Math.floor(Math.random() * letters.length)
        password += letters[letter]
    }

    return password
}