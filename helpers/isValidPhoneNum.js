const isValidPhoneNum = (input) => {
    console.log("From tel check", input)
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(input);
}

module.exports = isValidPhoneNum;