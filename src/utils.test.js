const { validateEmail, validateNameContent } = require("./utils");

describe("Form validation test suite", () => {
  describe("email validation tests", () => {
    it("returns invalid if email doesnt contain @", () => {
      expect(validateEmail("alice")).toEqual("invalid");
    });
  });
  describe("name and content validation tests", () => {
    it("name must be more than 0 characters", () => {
      const inputName = "";
      const inputContent = "I am making a request for a callback";
      const output = "You need to fill out your full name";
      expect(validateNameContent(inputName, inputContent)).toBe(output);
    });
    it("full name must contain at least two words", () => {
      const inputName = "Alice";
      const inputContent = "I am making a request for a callback";
      const output = "You need to fill out your full name";
      expect(validateNameContent(inputName, inputContent)).toBe(output);
    });
    it("email content must contain at 20 characters", () => {
      const inputName = "Louise Spencer";
      const inputContent = "Hi";
      const output = "Your enquiry must contain at least 20 characters";
      expect(validateNameContent(inputName, inputContent)).toBe(output);
    });
    it("if both content and name are invalid, return statement includes that both are incorrect", () => {
      const inputName = "";
      const inputContent = "Hi";
      const output =
        "You need to fill out your full name and your enquiry must contain at least 20 characters";
      expect(validateNameContent(inputName, inputContent)).toBe(output);
    });
    it("if both content and name are valid, return statements lets us know our forms been submitted", () => {
      const inputName = "Bob Turner";
      const inputContent = "Hi, I would like you to build me a website";
      const output = "Your contact request has been submitted, thank you";
      expect(validateNameContent(inputName, inputContent)).toBe(output);
    });
  });
});
