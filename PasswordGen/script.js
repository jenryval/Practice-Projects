var CharacterAmountRange = document.getElementById("CharacterAmountRange")
var CharacterAmountNumber = document.getElementById("CharacterAmountNumber")
var IncludeUppercaseElement = document.getElementById("includeUppercase")
var IncludeNumbersElement = document.getElementById("includeNumber")
var IncludeSymbolsElement = document.getElementById("includeSymbols")
var form = document.getElementById("passwordGeneratorForm")
var passwordDisplay = document.getElementById("passwordDisplay")

var UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
var LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
var NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
var SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 947).concat(
    arrayFromLowToHigh(58, 64).concat(arrayFromLowToHigh(91, 96).concat(arrayFromLowToHigh(123, 126)
    )
    )
)

CharacterAmountNumber.addEventListener("input" , syncCharacterRange)
CharacterAmountRange.addEventListener("input" , syncCharacterAmount)

form.addEventListener("submit", e => {
    e.preventDefault()
    var characterAmount = CharacterAmountNumber.value
    var includeSymbols = IncludeSymbolsElement.checked
    var includeNumber = IncludeNumbersElement.checked
    var includeUppercase = IncludeUppercaseElement.checked
    var password = generatePassword(characterAmount, includeUppercase, includeNumber, includeSymbols)
    passwordDisplay.innerText = password
});

function generatePassword( characterAmount, includeNumber, includeSymbols, includeUppercase) {
let charCodes = LOWERCASE_CHAR_CODES
if(includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
if(includeNumber) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
if(includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)

var passwordCharacters = []
for ( i = 0; i< characterAmount; i++) {
    var characterCode = charCodes[Math.floor(Math.random()) * charCodes.lenght]
    passwordCharacters.push(String.fromCharCode(characterCode))
}
return passwordCharacters.join("")

}

function arrayFromLowToHigh(low, high) {
    var array = []
    for (i = low; i <=high; i++) {
        array.push(i)
    }
    return array
}

function syncCharacterAmount(e) {
    var value = e.target.value
    CharacterAmountNumber.value = value
    CharacterAmountRange.value = value
}

function syncCharacterRange(e) {
    var value = e.target.value
    CharacterAmountNumber.value = value
    CharacterAmountRange.value = value}


