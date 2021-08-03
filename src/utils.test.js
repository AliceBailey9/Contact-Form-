const { validateEmail, validateNameContent } = require("./utils");

describe("Form validation test suite", () => {
  describe("email validation tests", () => {
    it("returns invalid if email doesn't contain @", () => {
      expect(validateEmail("alice")).toEqual("invalid");
    });
    it("email must contain at least 1 non-white space character before @ or returns invalid", () => {
      expect(validateEmail("@hotmail.com")).toEqual("invalid");
    });
    it("email must contain at least 1 non-white space character after @ or returns invalid", () => {
      expect(validateEmail("Sara@ .com")).toEqual("invalid");
      expect(validateEmail("Sara@")).toEqual("invalid");
    });
    it("must contain a . in the domain after a valid character", () => {
      expect(validateEmail("Sara@.com")).toEqual("invalid");
    });
    it("must contain a . in the domain in between valid characters", () => {
      expect(validateEmail("Sara@hotmail.")).toEqual("invalid");
    });
    it("returns valid for email address that fit the above valid criteria", () => {
      expect(validateEmail("Sara@hotmail.com")).toEqual("valid");
    });
  });

  describe("name and content validation tests", () => {
    it("name must be more than 0 characters", () => {
      const inputName = "";
      const inputContent = "I am making a request for a callback";
      const output = "You need to fill out your full name.";
      expect(validateNameContent(inputName, inputContent)).toBe(output);
    });
    it("full name must contain at least two words", () => {
      const inputName = "Alice";
      const inputContent = "I am making a request for a callback";
      const output = "You need to fill out your full name.";
      expect(validateNameContent(inputName, inputContent)).toBe(output);
    });
    it("email content must contain at 20 characters", () => {
      const inputName = "Louise Spencer";
      const inputContent = "Hi";
      const output = "Your enquiry must contain at least 20 characters.";
      expect(validateNameContent(inputName, inputContent)).toBe(output);
    });
    it("if both content and name are invalid, return statement includes that both are incorrect.", () => {
      const inputName = "";
      const inputContent = "Hi";
      const output =
        "You need to fill out your full name and your enquiry must contain at least 20 characters.";
      expect(validateNameContent(inputName, inputContent)).toBe(output);
    });
    it("if both content and name are correct, function returns valid", () => {
      const inputName = "Bob Turner";
      const inputContent = "Hi, I would like you to build me a website";
      expect(validateNameContent(inputName, inputContent)).toBe("valid");
    });
  });
});
