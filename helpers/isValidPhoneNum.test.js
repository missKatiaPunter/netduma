const isValidPhoneNum = require('./isValidPhoneNum');


test("isValidPhoneNum is working as expected", () => {
    expect(isValidPhoneNum('07715130293')).toBe(true);
    expect(isValidPhoneNum(333)).toBe(false);
    expect(isValidPhoneNum("hello world")).toBe(false);
});