const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("Initilization", () => {
    it("should have a 'name' property", () => {
      const obj = new Intern();

      expect(obj.hasOwnProperty("name", "id", "email", "school")).toBe(true);
    });
    it("should have a 'id' property", () => {
      const obj = new Intern();

      expect(obj.hasOwnProperty("id")).toBe(true);
    });
    it("should have a 'email' property", () => {
      const obj = new Intern();

      expect(obj.hasOwnProperty("email")).toBe(true);
    });
    it('should have the "school" property', () => {
      const obj = new Intern();
      expect(obj.hasOwnProperty("school"));
    });

    describe("get role", () => {
      it('should return "intern" when the "getRole" function is called', () => {
        const obj = new Intern();
        expect(obj.getRole()).toEqual("intern");
      });
    });
  });
});
