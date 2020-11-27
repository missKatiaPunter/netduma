const formatAddr = (contact) => {
    const { firstName, otherNames, secondName, email, telephone, street, town, country } = contact;
    return `${firstName} ${otherNames} ${secondName}, Tel: ${telephone}, Email: ${email}, Address: ${street}, ${town}, ${country}`
}

module.exports = formatAddr;