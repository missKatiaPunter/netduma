const formatAddr = require('./formatAddr');

let FAKEUSER = { 
    firstName: "Alice", 
    otherNames: "Louise",
    secondName: "Johnson",
    email: "ali@gmail.com",
    telephone: "0775648653",
    street: "1, Red Square",
    town: "Moscow",
    country: "Russia"
}

test("address formatter formats as expected", () => {
    expect(formatAddr(FAKEUSER)).toEqual("Alice Louise Johnson, Tel: 0775648653, Email: ali@gmail.com, Address: 1, Red Square, Moscow, Russia")
})